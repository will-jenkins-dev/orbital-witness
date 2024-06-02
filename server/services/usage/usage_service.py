import requests
from services.usage.constants import MESSAGES_URL, REPORT_URL_TEMPLATE
from services.usage.cost_functions import calculate_total_cost


def _get_messages():
    messages_response = requests.get(MESSAGES_URL)
    messages_response.raise_for_status()
    return messages_response.json()["messages"]


def _get_report(report_id):
    report_response = requests.get(REPORT_URL_TEMPLATE.format(report_id))
    if report_response.status_code == 200:
        return report_response.json()
    else:
        # log error or missing report
        return None


def get_usage():
    messages = _get_messages()
    results = []
    for message in messages:
        report_id = message.get("report_id", None)
        report = _get_report(report_id) if report_id else None

        other_fields = (
            {
                "report_name": report["name"],
                "credits_used": float(report["credit_cost"]),
            }
            if report
            else {"credits_used": calculate_total_cost(message["text"])}
        )

        results.append(
            {
                "message_id": message["id"],
                "timestamp": message["timestamp"],
                **other_fields,
            }
        )

    return results
