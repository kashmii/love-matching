import React, { useEffect, useState } from "react"

// testAPIを呼び出すメソッドをimport
import { execTest } from "lib/api/test"

const App: React.FC = () => {
  // useStateで変数messageを宣言
  const [message, setMessage] = useState<string>("")

  // apiを叩いてレスポンスを変数に入れるメソッドを宣言
  const handleExecTest = async () => {
    const res = await execTest()

    if (res.status === 200) {
      setMessage(res.data.message)
    }
  }

  // 第2引数の値が変わったときのみ、第1引数の処理を実行する
  useEffect(() => {
    handleExecTest()
  }, [])

  return (
    <h1>{message}</h1>
  )
}

export default App
