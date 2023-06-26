// onmessage = (e) => {
//   const data = e.data;
//   console.log('worker',e)
//   postMessage(
//     data.reverse()
//   )
//   // 给主线程发送消息
// }

onconnect = (e) => {
  // 共享worker
  console.log('worker',e)
  const port = e.ports[0];

  port.onmessage = (current) => {
    post.postMessge(current)
    console.log(current)
  }
}