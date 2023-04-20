var aa = [
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM0OTg1MTAzMjQ0ODQxOTMvbXBzLzM5ZDM3NzAwNDZmNDQ3ZmZiMTM0YTU5ZGIxMDVjZDZhMjUyMTcubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1MDcyOTM1NjQxOTI4MzMvbXBzLzdmYmNiZGFhYmMzZDRjNDFhNDFlZmRlOWEyMTYwMjk0MjY3ODQubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1MTk1MjYxNjA0NTA2MzAvbXBzLzNjNzdjMzczM2RmMzQ4NjY4NzQyZWI1OWIxOWYxZDg0Mjk2MTEubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1NjQzNzIwNDI1OTc0NzMvbXBzL2E0ZGVjYzQ4MmUwNTQwNTE5NTBkNTA4YTIwZTRmZDQwNDE3MTgubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1NzY0MzQ0ODc2MTA0NjYvbXBzLzU0ODBkNzgwMjIyZjQxMDE5ODM2ZjdlMmZkMTFmNjE2NDYwODQubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1ODYzMjIzMjE2NTU4MjEvbXBzLzcwZTNkZjkyNWIwNDQ2MGRiOTM5OWQ5NjM4MDU4NzJjNDk1MTkubXA0Cg',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1ODY1MDkyMDE3NTMxNTkvbXBzL2RlNDEyNjE2YzZiYTQxZmFhNGQ2NmNiZjY1YWQ0YTYxNDk2MDIubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1ODY1NjgwOTU5NDQ3MTIvbXBzLzU3YTQyMThlZjkzNjQxMjJiN2UzMjllYjEzMDYwMDFhNDk0NTUubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1OTgwNDYzODU1NTU1MjAvbXBzLzg3MzYyNGQ2ZGY1MjQ2NjM4Y2ZiZTg4ODhmNWQ2MDM1NTM3MzQubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1OTk1MTMxNjE0NTM1ODkvbXBzLzE3Y2JjOWNmYmExMTQ1YjU4ZTk3OGQyY2Q4MzBmMDkyNTQ1MzAubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM1OTk4NjU1MDE5OTUwMjcvbXBzLzJiNmJhOTVlNjkyMzQzZDhhNGZlYWUzYzY2YTY2NTJlNTQ0NDUubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MDkzMjA5NjkzNTgzNjgvbXBzL2NhYTc4NDdhZTc5YjQ3ZDc5Zjc5ZTdmM2NiYjgyN2FiNTg0NDAubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MjAyMzk4MzA0MzQ4NjMvbXBzLzE5ODM3MTFiNzQ2ZTQwNDhiMzRkNmNkNDEzMzk5ZDFjNjEwODkubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MzE4MjQ0OTQ2NzUwMzEvbXBzL2VhZDU2YWVjNmRhNjRmYjg5ZWNkMWE4ZTNhZjM3MjUwNjUwMjEubXA0', 
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MzE5MTA5NTk3Mjc2OTIvbXBzLzE3Y2Y2ZjFlMDJlMjRlODk5YWI5M2EzNTQ4MjcyY2JhNjQ4MDUubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MzU3NTgwMjA3MDgzNzEvbXBzLzhiYTRhZGY5NDNjNjQ5ZWM5ZDFiNWRkZmQ2OWI5MTA0NjU5MjMubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NDcwMzIyODc3MTAyNTAvbXBzLzRmMWY3NGNlN2Q5ODQ0NjZhNjc2YWE1Y2U5Y2Q3ODY2Njc4NDYubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NDcwODY2NjEwOTQ0MjMvbXBzLzI2YWI2MmU1ZTUyZDQ2OTI4YmFmMjc2NTU4MmVjODA5Njc0MjUubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NTYxMzE5OTY0MzY1MDEvbXBzL2M3ODE5ZThjYzgyNDQ2ODFhNDI5YjYxZjE0Njc0NTk2NzAzNjYubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NjYwOTMxNDg3NTQwMTcvbXBzLzFmZTE4MWNkOGZmYzRlMDk5NTg2MTE1OTViYmE3OThlNzMyMjYubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2ODk4MDk4NTgyODU2MzEvbXBzLzdkN2JhZTI4NDAxMzRiNGNhMWI2MjU1ZTk1ZjNjM2I1Nzk1MjgubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MDEzMjg1MzIyMjcwOTUvbXBzLzMwZmM1NWE0ODg1MDQzNjBhNTQzMDNkNTM4MDY2ODU2ODQyMjIubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MDE1NTYwOTAyNTg1MTAvbXBzL2E4Nzc2NzgxZTJlNjRkZTZhOTRjNjMyZTBmNDRkNmI3ODM5NDUubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MDk5ODg1MjY2NDAyMDQvbXBzLzM1NjEyNTU4Y2VkNzQzMWU5MTA4MGM2YzlhOWI0MDVlODY1ODEubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MTIyOTgzMTkxMDMwMzMvbXBzLzdmZWY4YjNmNTBkYTRjYzBiYmI5YjA4YjYwZGU1OWQzODc1MTcubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MTI2MDg3MDQ4MDkwMzYvbXBzLzE1YWJiN2E5ZDU2MDQzODdhZDFlODczMzQzMTBlZjFkODc4NDYubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjIxNjU1Njg2ODYwODQvbXBzL2Q5ZjgzMjBmNzM2YjRjYTI4MjVlN2I1MjQyMGZhYzhmODkyNTQubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjMxMDY3MjY1OTY2ODkvbXBzLzZjZDM3OTI1ZTc0MDRiMDc4ZTcyZDYyMWIxYjM3ZWVmODkzMzIubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjY3NTE0MDE3ODg1MDEvbXBzLzg2N2I5MDAyM2IwMTQ4MzM4ZDVkNDg4YmE1OWMyMDcyOTAzMjIubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzE1NjA4NTEwNjY4ODcvbXBzLzc4NDM5N2MyNDAzZTQzOTU4Mjg0NzhlNTBjODQ1NzcwOTA2NTEubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzQ2MjkzMTMxNjk0NDYvbXBzLzY0OTAyN2E1ZjU5NjQ0MzZhZjE1MGY4MTBhMjgwYzIzOTMzNjMubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzczNDA2OTIyODU0NzEvbXBzL2IyNTI2MGVkZjkzMjQyZDk4ODUxYzM3ZGExMDI2ZGM2OTQ2NDkubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NDczOTk2NzU5NTcyNzcvbXBzLzMwYzIzMTRhYzQ1ZTQ1ZTI5ZDY2Njk4NzU0NmQyNDVkOTkzMjMubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NDg1ODkxOTIzNjgxODcvbXBzLzU2ZTFmOWMzMTk3ZjRmYmNiNmU1NzY0NWI1OTU0YWFmOTkxOTEubXA0',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NTY2ODY5ODE2MTM1ODUvbXBzLzRiZmRiNTMzY2ExZTQzMjc4MTk0NWU5ZmYxNzE2NmZmMTAxMzU1Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly92b2QucWllY2RuLmNvbS91cGxvYWRfbTN1OC8yMDIzMDQxMi8yNTk4NjI2OC02NmZkMDQ1MDQyNGIwMmM3ODA2OWFmNmJmNWI5OTZiZS0xMzAzMzk0LTMyMC9wbGF5bGlzdC5tM3U4',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NjAyNzk0MjgyODU0NzgvbXBzLzgxZDkzYmMyMGY1ZDQ0NjY4ZTI2MTgxOWU3MGIxMmNmMTAzMzY4Lm1wNAo',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NzEwMDA2NDg5MTA5MjIvbXBzLzBkZWJkMDRiM2U5ZjRlN2ZhZGE0ZGYwZjRlZDMyZTAyMTA2NDc4Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NzIxMDM0ODMwODQ4MzkvbXBzLzI2M2ZkMzI3NzA5MjQ3NzdiMDc4NmVhNWMwOGMzM2NkMTA2NzM2Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3Nzg5MjQ0MzU3NTI5NzMvbXBzLzQwODcyZDhlOGUxMTQ5ZDM5NGYxMjMzZmUxYjBhODU5MTA3ODkzLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODA0MDQ5MjIxNzU1MjkvbXBzLzQ2NzUyMzgwNmNjNjQ2MTZhYzkxM2UyNjdmMTZjNGI4MTA5MTk0Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODIzODU3NjExNDI3OTYvbXBzL2RkODQ5MTM0MjAxNjQ4MjFhZGM0NTQ5NmY4YmQyM2M5MTEwMDU0Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODI0NTY5ODM3MDE1MTkvbXBzLzJhNGI3OTNhMGI1NjRlMDJiOWJkMGNjZGFmMmNiMzcyMTEwMDAyLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODg1OTgyOTA4MjgyOTQvbXBzLzYyZmJmMzA2YzM2NjQ3NzZiMWM1ZWI2MTEwNzVlOGEzMTExMDY2Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODkxMTk3NDIxNjYxMDMvbXBzLzc0ZjY5Nzk3NDAzMDQwOTNhMzE3YzE2MDIxZDExZDQzMTEwODg3Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTIzNzI2OTk5MDgxMzcvbXBzL2FiODYwMmRkODlkNDQ3YzM4MzI1Njk2ODc1OTI1MGViMTEyMjM5Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTQxMjM3NzU2OTI4MTEvbXBzLzNhOWY1ZTQzOTQxNDRmYTQ5ODU3ZWYwMzllYjU3NTUyMTEyNzU1Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTk1ODQzNzYyNDQyMjUvbXBzL2U4Y2MzNGQ3YTIwNTRlNzliOGIzZjIyZWM0NTc3ODdkMTEzMDEzLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MDA2MDk4MDU4NDU1MjkvbXBzLzg5ZTVmMjA0YmU4YTRhYTZiODUyNzg3ZWZiZTEyMTc2MTEzOTE2Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MDM3Njc4NTM4MjgxODAvbXBzL2M4NDk4MDJhMzg1YjQyNmQ4Nzc2Y2ZhMjM2MjBjYWE5MTE0NDIwLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MDQ3NzU2MDI3MzYyMjIvbXBzLzE2MDAwOTJkZTUzMDRhYjFiNjcyOTEwZDM5NjhiNjJkMTE0OTEyLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTA4NjE5NTQ3NzkxNTIvbXBzLzhlNmIxOTUxOGNhYzRkMjBhMjJmMTA5MDZkMDg0ZjY5MTE2NDA3Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTEwNzA5MzM4ODA4NTYvbXBzLzM5MjdhZWFkNjhmYzRmOWZiMmUzZGY4ZTI1ODkzNTdlMTE2MjgwLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTEzMTE5OTk2NjcyMDEvbXBzLzRhMTVhZTZiNjdhNTQ5ODJiMjU0Njg3MjcxMjE1OTdiMTE2NjM5Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTI4MzU4MzI2NDc3MDMvbXBzL2IyODMxOWVmOWU4NzRhMDZiMWYzYjkyMjhjMzJmZGU1MTE2NTQ4Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTQxODQ4NjQ0NjgwNDYvbXBzLzdlYzlmZTczY2M2NDQ3MzliZWZiNjhlYTM3MDQxZGZkMTE3MTU4Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MTY2MjUwMDk0NzY2MjkvbXBzL2ZhMDA1OGVkOTZiZDQ1OThiOTYwOTQwMTNkYWNhYzQyMTE4Njk4Lm1wNAo',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MjI0NjczNjAxMTQ3MjUvbXBzLzE4MjhkMGY0ZDUyMzQyOTI5NjNiN2QwZmUxNDI5YmQ0MTIwMTQwLm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MjQzMTAzOTMxMjc5NTEvbXBzLzNjODA5ZDBiZmJkMTQyYTFhMDNmNWUxMmU1OWY4YTdlMTIwNjk1Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4MjY5MjkyNjQ3NzIxOTEvbXBzL2JlM2NiMWYyYzNhZDQ2ZDZhNDYxNDdlZWFiZGQzN2E5MTIyMjA1Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4NDQzNzI0MDkzNjk2OTcvbXBzLzAxNTgwMjA3Zjc4YTRkZjk5MzAzZGQ0MDA0ZDgzY2ZhMTI1MTE3Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4NDY1MDA1MDUxMTA1NjEvbXBzLzUzZWNhODIyZjBlYzRiOTFhODlkOGRlNjVlYWMyMDhkMTI2MzA0Lm1wNA',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4NDgzMDM2NDAyMDAyMzAvbXBzLzBlY2NkODI3ZTIyZDRlNDA5YmFmZDY3ZWU1ZWI3MjNhMjUzOC5tcDQ',
    'https://vip86.github.io/c.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4NTAxMjg1MDMwOTc0MTIvbXBzLzZkMmVlZTVjNmUwNjQ2NzVhOGIzNWJlZDVmNDFiZDI0MTI3NjE0Lm1wNA',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
     
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*100);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}
