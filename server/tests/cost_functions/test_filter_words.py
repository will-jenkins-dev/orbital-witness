from services.usage.cost_functions import filter_words


def test_removes_punctuation():
    assert filter_words("hello world!") == "hello world"


def test_preserves_apostrophes():
    assert filter_words("hello I'm here") == "hello I'm here"


def test_preserves_dashes():
    assert filter_words("hello- I'm here") == "hello- I'm here"


def test_strips_non_word_characters():
    assert filter_words("Hello world! $200?") == "Hello world"


def test_mixed_characters():
    assert filter_words("It's a wonderful-world!") == "It's a wonderful-world"


def test_only_special_characters():
    assert filter_words("!@#$%^&*()") == ""


def test_text_with_numbers():
    assert filter_words("The price is $200") == "The price is"


def test_empty_string():
    assert filter_words("") == ""


def test_single_word_with_punctuation():
    assert filter_words("hello!") == "hello"
