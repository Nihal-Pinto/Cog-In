https://nihal-pinto.github.io/Cog-In/

1. retrieve OAuth token
2. ask to start scan
3. send OAuth+state ("userInfo") to backend
4. **store userInfo tentatively**
5. **start listening**
6. retrieve webhook url
7. open camera for scan
8. scan completed
9. launch webhook message
10. **read message**
11. **save attendance**