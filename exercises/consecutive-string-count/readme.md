### Instructions

We have to code a function `modify(text)` that takes a string `text` made up of consecutive lower-case letters from a to z such as `"aaabaabbdwaa"` or `bbabbbbaaaa`. The function outputs another string which, for each letter, contains the number of times that letter occur in a sequence followed by that letter itself.

### Examples

`modify("aaabbbaacca")` outputs `"3a3b2a2c1a"`.

`modify("abcd")` outputs `"1a1b1c1d"`.

`modify("bbbbbbaaaa")` outputs `"6b4a"`

### Note

1. `modify("")` outputs `""`.

2. the input will always be a string made of lower-case letters from a to z.
