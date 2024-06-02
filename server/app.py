from pathlib import Path
from connexion import FlaskApp
import requests
from starlette.middleware.cors import CORSMiddleware

from services.usage.usage_service import get_usage

app = FlaskApp(__name__, validate_responses=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.add_api("openapi.yaml", validate_responses=True)


@app.route("/hello")
def hello():
    return "Hello world!"


@app.route("/usage")
def usage():
    try:
        usage = get_usage()
        return {"usage": usage}

    except requests.exceptions.RequestException as err:
        return {"error": str(err)}, 500

    except Exception as err:
        return {"An error occurred": str(err)}, 500


if __name__ == "__main__":
    app.run(f"{Path(__file__).stem}:app", port=5000)
