#!/usr/bin/python3
"""
Making Change
"""


def makeChange(coins, total):
    """
    Return the minimum number of coins needed to meet a given total
    Args:
        coins (list of ints): a list of coins of different values
        total (int): total value to be met
    Return:
        Number of coins or -1 if meeting the total is not possible
    """
    if total <= 0:
        return 0
    coins = sorted(coins, reverse=True)
    curTotal = 0
    minCoins = 0
    for coin in coins:
        bal = (total - curTotal)//coin
        curTotal += bal*coin
        minCoins += bal
        if curTotal == total:
            return minCoins
    return -1
