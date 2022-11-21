# dogenanojs
Javascript utilities for the dogenano cryptocurrency

https://dogenano.io
![dogenano_icon](https://pbs.twimg.com/profile_images/1521234639305809922/nAjlw7Pd_400x400.png)

**make sure to use `npm i dogenanojs@latest` to get the latest version**




# Making A XDG Wallet
``` js
const {genWallet} = require("dogenanojs")

genWallet()

// Generated Wallet  Private Key : 7DA2E01E3A1DE74A336ABCB9C3DC08FCFFFA25AFC2D50149F2AEC16E50D5663C  Public Key : 3D55E66B5BF108F4B26D24C3E8A68321FD03A452AC2C88E075FFC9CD29B91B04  Address: xdg_1hcowsooqwaayks8tb85x4ma8ahx1gk77d3ej5i9dzybsnnuk8r6poc314qx

```

# Fetching Balance
```js
 const {balance,balanceRAW} = require("dogenanojs")

 balance(address)
 // output comes in amount of dogenano
 balanceRAW(address)
 // gives result in raw amt
```

# Return node uptime 
```js
const {getUptime} = require("dogenanojs");

getUptime()
// in seconds
```
![imgjs](https://media.discordapp.net/attachments/1035519056473751587/1043901228679188600/90b089ea-0f7d-451a-b0ea-28fe51112d68_1.gif)




 * **Refer Docs Here :-**

   *Will Be Released Soon*


# Donate 💙 
**You can either donate by making a pullrequest on github helping to improve this module or you can send your love in xdg by clicking the button below**


https://github.com/WrappedCelio/dogenanojs

<a href = "https://wallet.dogenano.io/send?to=xdg_3dauit3e9fqzooonwxfio8rbe9m7a3pjen9qis5e4nqtzqd5qdp7ekhsdjcf"><img src="https://cdn-icons-png.flaticon.com/512/5407/5407520.png" width="40" height="40" /></a>

Thanks!
