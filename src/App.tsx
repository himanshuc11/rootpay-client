
import { useEffect } from 'react'
import './App.css'
import { RootPaySDK } from "rootpay-secure-payment-sdk"

const rootpay = new RootPaySDK({
  theme: {
    primaryColor: "#0D94FB",
    secondaryColor: "#F2F0EF"
  },
  clientId: "4fa7fa681e31c2bf513bb838a691d533d219fc53957e75d1ff422fcfe6dcb057",
  clientSecret: "ab5bd52e844eb1ec74f422cb494b449a38524c30e5ab00d6156d76a91094348e",
  rootId: 'def',
  mode: "dev"
})

function App() {
  
  useEffect(() => {
    rootpay.init()

    rootpay.subscribe((data) => {
      alert('Received Data' +  JSON.stringify(data))
    })
  }, [])

  return (
   <div id='def' style={{width: "100dvw", height: "100dvh"}} />
  )
}

export default App
