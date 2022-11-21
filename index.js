const xdg = require("axios");

async function getPublic(addr){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "account_key",
  "account" : addr
}
).then(res => console.log(res.data.key))
}

async function getReprestative(addr){
  xdg.post("https://rpc.dogenano.io/proxy", {
  "action": "account_representative",
  "account": addr
}
).then(res => {console.log(res.data.representative)})
}

async function accWeight(addr){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "account_weight",
  "account" : addr
}
).then(res => console.log(res.data.weight))
}

async function getReprestative(addr){
  xdg.post("https://rpc.dogenano.io/proxy", {
  "action": "account_representative",
  "account": addr
}
).then(res => {console.log(res.data.representative)})
}

async function accFrontier(addr){
    xdg.post("https://rpc.dogenano.io/proxy", {
  "action": "account_frontiers",
  "accounts": [addr]
}
).then(res => {console.log(res.data.frontiers)})
}


async function blockConfirm(hash){
    xdg.post("https://rpc.dogenano.io/proxy", "https://dogenano.io/proxy",{
  "action": "block_confirm",
  "hash": hash
    }).then(res => {console.log(res.data)})
}


async function frontier_c(){
  xdg.post("https://dogenano.io/proxy", {
  "action": "frontier_count"
}
).then(res => {console.log(res.data.count)})
}


async function genWallet(){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "key_create"
}
).then(res => {console.log("Generated Wallet"+"  Private Key : "+res.data.private+ "  Public Key : "+res.data.public+ "  Address: "+res.data.account)})
}

async function getUptime(){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "uptime"
}
).then(res=>{console.log(res.data.seconds)})
}

async function keyExpand(privateKey){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "key_expand",
    "key": privateKey
}
).then(res => {console.log("Generated Wallet"+"  Private Key : "+res.data.private+ "  Public Key : "+res.data.public+ "  Address: "+res.data.account)})
}
function d(num) {
   return (num / 100).toFixed(5);
}

async function balance(addr){
  try {
  const request = {
    "action": "account_balance",
    "account": addr
  }
  xdg.post('https://rpc.dogenano.io/proxy', request).then(res => {console.log((d(res.data.balance.slice(0,-24))                                    ))})
  } catch(error) {
    console.log("malformed request "+ error)
  }
}

async function balanceRAW(addr){
  const request = {
    "action": "account_balance",
    "account": addr
  } 
  try {
  xdg.post('https://rpc.dogenano.io/proxy', request).then(res => {console.log(res.data.balance)})                                        
  } catch (error) {
    console.log(error)
  }
}

async function balanceP(addr){
  const request = {
    "action": "account_balance",
    "account": addr
  } 
  try {
  xdg.post('https://rpc.dogenano.io/proxy', request).then(res => {console.log(d(res.data.pending.slice(0,-24)))})                                        
  } catch (error) {
    console.log(error)
  }
}

async function balanceRAWp(addr){
  const request = {
    "action": "account_balance",
    "account": addr
  } 
  try {
  xdg.post('https://rpc.dogenano.io/proxy', request).then(res => {console.log(res.data.pending)})                                        
  } catch (error) {
    console.log(error)
  }
}

async function XDGtoRaw(amt){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "nano_to_raw",
  "amount": amt
}).then(res => {console.log(res.amount)})
}

async function RawToXDG(amt){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "raw_to_nano",
  "amount": amt
}).then(res => {console.log(res.amount)})
}

async function work_generate(hash){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "work_generate",
  "hash": hash
}
).then(res => {console.log(res.data)})
}

async function work_cancel(hash){
  xdg.post("https://rpc.dogenano.io/proxy",{
  "action": "work_cancel",
  "hash": hash
}
).then(res => {console.log(res.data)})
}

module.exports = {getPublic,getReprestative,accWeight, accFrontier,genWallet,blockConfirm,work_cancel,work_generate,RawToXDG,XDGtoRaw,balance,balanceRAW, balanceRAWp,balanceP,getUptime}
