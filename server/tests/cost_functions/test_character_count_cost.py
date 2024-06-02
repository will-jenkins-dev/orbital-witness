from decimal import Decimal
from services.usage.cost_functions import calculate_character_count_cost


def test_short_words():
    assert calculate_character_count_cost("a be sea") == Decimal("0.4")


def test_single_character():
    assert calculate_character_count_cost("a") == Decimal("0.05")


def test_empty_text():
    assert calculate_character_count_cost("") == Decimal("0.0")


def test_long_text():
    assert calculate_character_count_cost(
        "The quick brown fox jumps over the lazy dog"
    ) == Decimal("2.15")


def test_special_characters():
    assert calculate_character_count_cost("Hello, world!") == Decimal("0.65")


def test_numeric_characters():
    assert calculate_character_count_cost("1234567890") == Decimal("0.5")


def test_mixed_characters():
    assert calculate_character_count_cost("abc 123 !@#") == Decimal("0.55")
