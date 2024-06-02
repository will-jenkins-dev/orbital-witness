from services.usage.cost_functions import is_palindrome


def test_simple_palindrome():
    assert is_palindrome("madam I'm Adam") is True


def test_complex_palindrome():
    assert is_palindrome("A man, a plan, a canal, Panama") is True


def test_alphanumeric_palindrome():
    assert is_palindrome("A bc d 12321 d cba") is True


def test_non_alphanumeric_palindrome():
    assert is_palindrome("abc££(@@ cba") is True


def test_non_palindrome():
    assert is_palindrome("madam I'm Eve") is False


def test_empty_string():
    assert is_palindrome("") is False


def test_missing_string():
    assert is_palindrome(None) is False
