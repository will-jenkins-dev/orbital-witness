from decimal import Decimal
from services.usage.cost_functions import calculate_third_vowels_cost


def test_no_vowels():
    assert calculate_third_vowels_cost("bcdfghjklmnpqrstvwxyz") == Decimal("0.0")


def test_lower_vowels():
    assert calculate_third_vowels_cost("aeiouaeio") == Decimal("0.9")


def test_upper_vowels():
    assert calculate_third_vowels_cost("AEIOUAEIOU") == Decimal("0.9")


def test_mixed_case():
    assert calculate_third_vowels_cost("aeiouAEIOU") == Decimal("0.9")


def test_empty_text():
    assert calculate_third_vowels_cost("") == Decimal("0.0")


def test_single_character():
    assert calculate_third_vowels_cost("a") == Decimal("0.0")


def test_two_characters():
    assert calculate_third_vowels_cost("ab") == Decimal("0.0")


def test_three_characters():
    assert calculate_third_vowels_cost("aba") == Decimal("0.3")


def test_no_vowels_at_third_positions():
    assert calculate_third_vowels_cost("bic dfg hij") == Decimal("0.0")


def test_vowels_at_mixed_positions():
    assert calculate_third_vowels_cost("abcdefghi") == Decimal("0.3")


def test_vowels_at_third_positions_with_spaces():
    assert calculate_third_vowels_cost("a e i o u") == Decimal("0.6")


def test_mixed_vowels_and_consonants():
    assert calculate_third_vowels_cost(
        "the quick brown fox jumps over the lazy dog"
    ) == Decimal("1.5")
