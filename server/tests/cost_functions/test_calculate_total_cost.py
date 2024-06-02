from services.usage.cost_functions import calculate_total_cost


def test_short_unique_palindrome():
    # b:1 + c:0.05*2 + l:0.1 + v:0 + lp:0 + uwb:-2 = 0.8 => 1 * p:2 => 2
    text = "oo"
    expected_cost = 2
    assert calculate_total_cost(text) == expected_cost


def test_short_unique_palindrome_vowels():
    # b:1 + c:0.05*10 + l:0.3 + v:3*0.3 + lp:0 + uwb:-2 = 0.7 => 0.1 * p:2 => 2
    text = "oooaaaaooo"
    expected_cost = 2
    assert calculate_total_cost(text) == expected_cost


def test_short_string():
    # b:1 + c:0.05*25 + l:0.2+0.3+0.2 + v:0.6 + lp:0 + uwb:-2 = 1.55 => 1.55 * p:1 => 1.55
    text = "Tenant Obligations Report"
    expected_cost = 1.55
    assert calculate_total_cost(text) == expected_cost


def test_numbers():
    text = "123"
    expected_cost = 1
    assert calculate_total_cost(text) == expected_cost


def test_empty_string():
    text = ""
    expected_cost = 1
    assert calculate_total_cost(text) == expected_cost
