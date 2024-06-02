from decimal import Decimal
import re

VOWELS = "aeiou"
BASE_COST = 1


def filter_words(text):
    pattern = re.compile(r"[a-zA-Z'-]+")
    words = pattern.findall(text)
    return " ".join(words)


def calculate_character_count_cost(text):
    return len(text) * Decimal("0.05")


def calculate_word_lengths_cost(text):
    words = filter_words(text)
    total = sum(
        Decimal("0.1")
        if len(word) <= 3
        else Decimal("0.2")
        if len(word) <= 7
        else Decimal("0.3")
        for word in words.split()
    )
    return total


def calculate_third_vowels_cost(text):
    total = sum(
        Decimal("0.3") for i in range(2, len(text), 3) if text[i].lower() in VOWELS
    )
    return total


def calculate_length_penalty(text):
    return 5 if len(text) > 100 else 0


def calculate_unique_word_bonus(text):
    if text is None or len(text) == 0:
        return 0

    words_split = filter_words(text).split()
    are_unique = len(words_split) == len(set(words_split))
    return 2 if are_unique else 0


def is_palindrome(text):
    if text is None or len(text) == 0:
        return False

    normalised_text = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    return normalised_text == normalised_text[::-1]


def calculate_total_cost(text):
    character_count_cost = calculate_character_count_cost(text)
    word_lengths_cost = calculate_word_lengths_cost(text)
    third_vowels_cost = calculate_third_vowels_cost(text)
    length_penalty = calculate_length_penalty(text)
    unique_word_bonus = calculate_unique_word_bonus(text)

    sub_sub_total = (
        BASE_COST
        + character_count_cost
        + word_lengths_cost
        + third_vowels_cost
        + length_penalty
        - unique_word_bonus
    )

    total = max(sub_sub_total, BASE_COST)
    total *= 2 if is_palindrome(text) else 1

    return float(total)
