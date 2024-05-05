#!/usr/bin/env python3
"""Python async task"""
from typing import List

task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Wait for a random delay and return it."""
    tasks = [await task_wait_random(max_delay) for _ in range(n)]
    return sorted(tasks)
