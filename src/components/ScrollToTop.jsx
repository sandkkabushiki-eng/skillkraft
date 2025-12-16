import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // ハッシュがある場合（#servicesなど）はスクロール位置を制御しない（ブラウザのデフォルト挙動または別途制御）
        // ただし、ページ遷移直後にハッシュがある場合は、その要素へスクロールさせる処理を追加
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // 要素が見つからない場合（ロード待ちなど）、少し遅延させて再試行する
                setTimeout(() => {
                    const el = document.getElementById(hash.substring(1));
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // ハッシュがない場合はトップへ
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
