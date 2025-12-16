import { Helmet } from 'react-helmet-async'

export default function SNSPage() {
    return (
        <div className="detail-page">
            <Helmet>
                <title>SNSマーケティング | 売上に繋がる本質的な運用 | スキルクラフト</title>
                <meta name="description" content="フォロワー数より利益を重視する、スキルクラフトのSNSマーケティング。AI分析と戦略的な設計で、確実に成果を出します。" />
            </Helmet>

            {/* LP Hero */}
            <header className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* SNS Icon Background */}
                <div className="sns-hero-pattern"></div>
                <div className="sns-floating-icons">
                    <div className="sns-icon-block">Instagram</div>
                    <div className="sns-icon-block">TikTok</div>
                    <div className="sns-icon-block">X</div>
                    <div className="sns-icon-block">YouTube</div>
                    <div className="sns-icon-block">Line</div>
                </div>

                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="hero-title" style={{ color: 'white', marginBottom: '20px' }}>
                        SNS運用で、<br />
                        <span style={{ color: '#c0a062' }}>「売上」</span>に繋がっていますか？
                    </h1>
                    <p className="hero-subtitle" style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>
                        フォロワー数だけで満足しない。<br />
                        ビジネスの成長に直結する、本質的なSNSマーケティング。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">こんなお悩みありませんか？</h2>
                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', marginBottom: '50px' }}>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>フォロワーは増えたが...</h3>
                            <p>「いいね」はつくけれど、商品購入やお問い合わせに繋がらない。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>投稿作成が負担...</h3>
                            <p>毎日のネタ探しや画像作成に時間がかかり、本業を圧迫している。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>戦略がわからない...</h3>
                            <p>とりあえず流行りの音源を使っているが、自社のターゲットに届いているか不安。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">Skill Kraftの解決策</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 01</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>AI × データ分析による「勝てる」戦略</h4>
                            <p>感覚的な運用は行いません。AIを活用して競合分析、トレンド分析を徹底的に行い、最短距離で成果が出るロードマップを設計します。</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 02</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>「集客」から「販売」までの導線設計</h4>
                            <p>SNSはあくまで入り口です。そこからどうやって公式LINEやLPへ誘導し、成約させるか。マーケティング全体を俯瞰した設計を行います。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="section">
                <div className="container text-center">
                    <div style={{ border: '3px solid var(--color-primary)', padding: '50px', borderRadius: '10px', maxWidth: '900px', margin: '0 auto', background: '#fcfcfc' }}>
                        <h2 className="section-title" style={{ marginBottom: '30px', color: 'var(--color-primary)' }}>自信があるからできる<br />【全額返金保証】</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '2' }}>
                            もし、定めたKPI（目標数値）を達成できなかった場合、<br />
                            いただいた費用は<strong className="text-red">全額返金</strong>いたします。<br />
                            <br />
                            「成果が出なくても費用はかかる」というリスクを、<br />
                            お客様に負わせることはありません。
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">実績紹介</h2>
                    <p className="text-center mb-8">※ 今後、実際の事例を詳しく公開していく予定です。</p>
                    <ul className="stats-list" style={{ listStyle: 'none', maxWidth: '600px', margin: '0 auto' }}>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Instagram リーチ数</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>2,000万 達成</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>1ヶ月でのフォロワー増</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>+20,000人</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>YouTube 登録者増(3ヶ月)</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>+30,000人</strong>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">お問い合わせ</h2>
                    <p className="mb-8">
                        まずは現状の課題をお聞かせください。<br />
                        最適なプランをご提案させていただきます。
                    </p>
                    <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="contact-button-premium">
                        無料相談はこちら
                    </a>
                    <p className="contact-note mt-4" style={{ fontSize: '0.8rem', color: '#888', marginTop: '10px' }}>
                        ※ Googleフォームへ移動します
                    </p>
                </div>
            </section>
        </div>
    )
}
