def is_pangram(sentence, letters):
   uniqe_sent = set(sentence.lower())
   MAX_CHAR = len(letters)
   visited = [False] * MAX_CHAR
   i = 0
   for c in letters:
      if c in uniqe_sent:
         visited[i] = True
         i+=1
   for bool_flag in visited:
      if not bool_flag:
         return False
   return True




print(is_pangram("hello", "helo")) #True
print(is_pangram("hello", "hel")) # False
print(is_pangram("hello", "helow")) # False
print(is_pangram("hello world", "helowrd")) # True
print(is_pangram("the quick brown fox jumps over the lazy dog", "abcdefghijklmnopqrstuvwxyz")) #True