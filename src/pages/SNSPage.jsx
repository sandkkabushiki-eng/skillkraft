import { Helmet } from 'react-helmet-async'

export default function SNSPage() {
    return (
        <div className="detail-page container">
            <Helmet>
                <title>SNS×AIコンサルティング | (株)Skill Kraft</title>
                <meta name="description" content="AIを活用した効率的なSNS運用で、フォロワー数ではなく「利益」を最大化します。Instagram、YouTube、TikTokに対応。全額返金保証あり。" />
            </Helmet>
            <div className="detail-hero">
                <h1 className="detail-title">SNS × AI Consulting</h1>
                <p className="detail-subtitle">AI活用型・売上特化SNS運用</p>
            </div>

            <section className="detail-section">
                <img src="/images/sns.png" alt="SNS × AI Analysis" className="detail-image" />
                <h2 className="detail-heading">フォロワー数 ≠ 売上</h2>
                <p>
                    「フォロワーが増えても売上が上がらなければ意味がない」<br />
                    私たちは単なる「バズ」を目的とせず、最終的な<strong>「利益」</strong>を生み出す設計を徹底します。<br />
                    コンセプト設計から商品導入、販売動線まで一貫してコンサルティングを行います。
                </p>
            </section>

            <section className="detail-section highlight-box">
                <h2 className="detail-heading text-red">【全額返金保証】</h2>
                <p className="strong-text">
                    もしバズらなかったら、全額返金いたします。<br />
                    絶対にバズらせる自信があるからこそできる、リスクゼロの提案です。
                </p>
            </section>

            <section className="detail-section">
                <h2 className="detail-heading">圧倒的な実績</h2>
                <ul className="stats-list">
                    <li>Instagram リーチ数：<strong>2000万</strong>達成</li>
                    <li>Instagram フォロワー増：1ヶ月で<strong>2万人</strong></li>
                    <li>YouTube 登録者増：3ヶ月で<strong>3万人</strong></li>
                </ul>
                <p className="mt-4">
                    法人・個人の枠を超え、確実に数字を作るノウハウを提供します。
                </p>
            </section>

            <div className="cta-section">
                <p className="mb-4">ご相談・資料請求は下記よりお気軽にどうぞ</p>
                <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="contact-button-premium">
                    お問い合わせフォームへ進む
                </a>
                <p className="contact-note">※ Googleフォームへ移動します</p>
            </div>
        </div>
    )
}
