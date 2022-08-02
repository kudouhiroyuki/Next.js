import sidebarStyles from "@/styles/components/Sidebar.module.scss";

export default function SideBar() {
  return (
    <nav className={`${sidebarStyles.sidebar}`}>
      <li>
        <span>施設管理</span>
        <a href="">施設情報管理</a>
        <a href="">お知らせ登録</a>
        <a href="">お知らせ照会</a>
      </li>
      <li>
        <span>商品管理</span>
        <a href="">商品登録</a>
        <a href="">商品照会</a>
      </li>
      <li>
        <span>在庫管理</span>
        <a href="">在庫登録</a>
        <a href="">在庫一覧</a>
      </li>
      <li>
        <span>注文管理</span>
        <a href="">注文照会</a>
        <a href="">部分キャンセル</a>
        <a href="">QR読み込み</a>
      </li>
      <li>
        <span>売上管理</span>
        <a href="">売上レポート</a>
        <a href="">バス予約照会</a>
      </li>
      <li>
        <span>クーポン管理</span>
        <a href="">クーポン登録</a>
        <a href="">クーポン照会</a>
      </li>
      <li>
        <span>システム管理</span>
        <a href="">メンテナンス（システム）</a>
        <a href="">メンテナンス（施設）</a>
        <a href="">ログ照会</a>
        <a href="">システム稼働状況照会</a>
        <a href="">サービス稼働状況照会</a>
      </li>
      <li>
        <span><a href="">設定</a></span>
      </li>
      <li>
        <span><a href="">サポート表示</a></span>
      </li>
      <li>
        <span><a href="">システム利用規約</a></span>
      </li>
    </nav>
  )
}


