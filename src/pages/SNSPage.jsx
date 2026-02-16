import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function SNSPage() {
    const baseUrl = 'https://skillkraft.xyz'
    const pageUrl = `${baseUrl}/sns`
    const title = 'SNSマーケティング | 売上に繋がる本質的な運用 | スキルクラフト'
    const description =
        'フォロワー数より利益を重視する、スキルクラフトのSNSマーケティング。AI分析と戦略設計で、売上に繋がる運用へ改善します。'
    const keywords =
        'スキルクラフト,Skill Kraft,SNSマーケティング,SNS運用,Instagram運用,TikTok運用,YouTube運用,X運用,集客改善,売上改善,AI分析'

    const serviceLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SNSマーケティング',
        serviceType: 'SNSマーケティング',
        url: pageUrl,
        description,
        provider: {
            '@type': 'Organization',
            name: '株式会社Skill Kraft',
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
        },
        areaServed: 'JP',
    }

    const painRef = useScrollAnimation()
    const solutionRef = useScrollAnimation()
    const guaranteeRef = useScrollAnimation()
    const statsRef = useScrollAnimation()
    const ctaRef = useScrollAnimation()

    return (
        <div className="detail-page">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${baseUrl}/logo.png`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${baseUrl}/logo.png`} />
                <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
            </Helmet>

            {/* Hero */}
            <header className="service-hero" style={{ background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)' }}>
                <div className="floating-icons">
                    <div className="floating-icon">IG</div>
                    <div className="floating-icon">TK</div>
                    <div className="floating-icon">X</div>
                    <div className="floating-icon">YT</div>
                    <div className="floating-icon">LINE</div>
                </div>
                <div className="container text-center">
                    <h1>
                        SNS運用で、<br />
                        <span className="hero-gold">「売上」</span>に繋がっていますか？
                    </h1>
                    <p>
                        フォロワー数だけで満足しない。<br />
                        ビジネスの成長に直結する、本質的なSNSマーケティング。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section" ref={painRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">こんなお悩みありませんか？</h2>
                    <p className="section-subtitle fade-in-up">多くの企業が抱えるSNS運用の課題</p>
                    <div className="pain-grid stagger-children">
                        <div className="pain-card">
                            <span className="pain-icon">📊</span>
                            <h3>フォロワーは増えたが...</h3>
                            <p>「いいね」はつくけれど、商品購入やお問い合わせに繋がらない。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">⏰</span>
                            <h3>投稿作成が負担...</h3>
                            <p>毎日のネタ探しや画像作成に時間がかかり、本業を圧迫している。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">🎯</span>
                            <h3>戦略がわからない...</h3>
                            <p>とりあえず流行りの音源を使っているが、自社のターゲットに届いているか不安。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="section bg-gray" ref={solutionRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">Skill Kraftの解決策</h2>
                    <p className="section-subtitle fade-in-up">成果にコミットする3つの強み</p>
                    <div className="benefits-wrapper">
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 01</span>
                            <h4>AI × データ分析による「勝てる」戦略</h4>
                            <p>感覚的な運用は行いません。AIを活用して競合分析、トレンド分析を徹底的に行い、最短距離で成果が出るロードマップを設計します。</p>
                        </div>
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 02</span>
                            <h4>「集客」から「販売」までの導線設計</h4>
                            <p>SNSはあくまで入り口です。そこからどうやって公式LINEやLPへ誘導し、成約させるか。マーケティング全体を俯瞰した設計を行います。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="section" ref={guaranteeRef}>
                <div className="container text-center">
                    <div className="guarantee-box fade-in-up">
                        <h2 className="section-title" style={{ marginBottom: '30px' }}>
                            自信があるからできる<br />【全額返金保証】
                        </h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '2', color: 'var(--color-text-light)' }}>
                            もし、定めたKPI（目標数値）を達成できなかった場合、<br />
                            いただいた費用は<strong className="text-red">全額返金</strong>いたします。<br /><br />
                            「成果が出なくても費用はかかる」というリスクを、<br />
                            お客様に負わせることはありません。
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-gray" ref={statsRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">実績紹介</h2>
                    <p className="section-subtitle fade-in-up">※ 今後、実際の事例を詳しく公開していく予定です。</p>
                    <ul className="stats-list-modern fade-in-up">
                        <li>
                            <span>Instagram リーチ数</span>
                            <strong>2,000万 達成</strong>
                        </li>
                        <li>
                            <span>1ヶ月でのフォロワー増</span>
                            <strong>+20,000人</strong>
                        </li>
                        <li>
                            <span>YouTube 登録者増(3ヶ月)</span>
                            <strong>+30,000人</strong>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section" ref={ctaRef}>
                <div className="container text-center">
                    <div className="fade-in-up">
                        <h2 className="section-title">お問い合わせ</h2>
                        <p className="section-subtitle" style={{ marginBottom: '30px' }}>
                            まずは現状の課題をお聞かせください。<br />
                            最適なプランをご提案させていただきます。
                        </p>
                        <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            無料相談はこちら
                        </a>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '12px' }}>
                            ※ Googleフォームへ移動します
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
