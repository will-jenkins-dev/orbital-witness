from services.usage.cost_functions import calculate_unique_word_bonus


def test_unique_words():
    assert calculate_unique_word_bonus("one two three four") == 2


def test_repeated_word():
    assert calculate_unique_word_bonus("one two three two") == 0


def test_single_word():
    assert calculate_unique_word_bonus("oooo") == 2


def test_empty_string():
    assert calculate_unique_word_bonus("") == 0
