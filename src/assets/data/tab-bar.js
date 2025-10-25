import homeImg from "@/assets/imgs/tabbar/tab_home.png"
import homeActiveImg from "@/assets/imgs/tabbar/tab_home_active.png"
import favorImg from "@/assets/imgs/tabbar/tab_favor.png"
import favorActiveImg from "@/assets/imgs/tabbar/tab_favor_active.png"
import orderImg from "@/assets/imgs/tabbar/tab_order.png"
import orderActiveImg from "@/assets/imgs/tabbar/tab_order_active.png"
import messageImg from "@/assets/imgs/tabbar/tab_message.png"
import messageActiveImg from "@/assets/imgs/tabbar/tab_message.png"

const tabBarData = [
  {
    key: "home",
    text: "首页",
    image: homeImg,
    activeImage: homeActiveImg,
    path: "/home"
  },
  {
    key: "favor",
    text: "收藏",
    image: favorImg,
    activeImage: favorActiveImg,
    path: "/favor"
  },
  {
    key: "order",
    text: "订单",
    image: orderImg,
    activeImage: orderActiveImg,
    path: "/order"
  },
  {
    key: "message",
    text: "消息",
    image: messageImg,
    activeImage: messageActiveImg,
    path: "/message"
  }
]

export default tabBarData;