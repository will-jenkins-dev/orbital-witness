from decimal import Decimal
from services.usage.cost_functions import calculate_word_lengths_cost


def test_short_words():
    assert calculate_word_lengths_cost("a an the") == Decimal("0.3")


def test_medium_words():
    assert calculate_word_lengths_cost("quick brown jumps") == Decimal("0.6")


def test_long_words():
    assert calculate_word_lengths_cost("beautifully jumping over") == Decimal("0.7")


def test_mixed_words():
    assert calculate_word_lengths_cost(
        "the quick brown fox jumps over the lazy tangerine"
    ) == Decimal("1.6")


def test_ignore_non_word_characters():
    assert calculate_word_lengths_cost("the quick £50 note?!%^^%£") == Decimal("0.5")


def test_empty_text():
    assert calculate_word_lengths_cost("") == Decimal("0.0")
