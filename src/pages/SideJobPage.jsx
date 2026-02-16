import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function SideJobPage() {
    const baseUrl = 'https://skillkraft.xyz'
    const pageUrl = `${baseUrl}/side-job`
    const title = 'AIサボ（AI副業・副業支援）| スキルクラフト'
    const description =
        'AIサボは、AI学習〜案件獲得〜収益化までを一気通貫で支援する学習プラットフォーム。AI副業で月100万円を目指すためのロードマップを提供します。'
    const keywords =
        'スキルクラフト,Skill Kraft,AIサボ,AI副業,副業支援,副業コンサル,AI学習,案件獲得,収益化,月100万円'

    const serviceLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AIサボ（AI副業・副業支援）',
        serviceType: 'AI副業支援 / AI学習プラットフォーム',
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
            <header className="service-hero" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #0f0a1a 100%)' }}>
                <div className="floating-icons">
                    <div className="floating-icon">AI</div>
                    <div className="floating-icon">$</div>
                    <div className="floating-icon">Lv</div>
                    <div className="floating-icon">UP</div>
                    <div className="floating-icon">Pro</div>
                </div>
                <div className="container text-center">
                    <h1>
                        AI時代に取り残されない。<br />
                        <span className="hero-gold">「収益化」</span>まで学べる。
                    </h1>
                    <p>
                        ただツールを使うだけでは不十分です。<br />
                        AIの本質的な理解から、実際の案件獲得・収益化まで一気通貫でサポート。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section" ref={painRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">こんなお悩みありませんか？</h2>
                    <p className="section-subtitle fade-in-up">AI副業を始めたい方の共通の悩み</p>
                    <div className="pain-grid stagger-children">
                        <div className="pain-card">
                            <span className="pain-icon">📚</span>
                            <h3>AIスキルを学びたいが...</h3>
                            <p>ChatGPTの使い方はわかるが、実際に仕事や副業にどう活かせばいいかわからない。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">💰</span>
                            <h3>収益化までできない...</h3>
                            <p>スキルは学んだが、実際に案件を獲得して収益化するまでの道のりがわからない。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">🔄</span>
                            <h3>一人では続かない...</h3>
                            <p>独学で始めたが、モチベーションが続かず、結局何も身につかなかった。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="section bg-gray" ref={solutionRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">AIサボの解決策</h2>
                    <p className="section-subtitle fade-in-up">収益化まで一気通貫サポート</p>
                    <div className="benefits-wrapper">
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 01</span>
                            <h4>本質的なAIスキルの習得</h4>
                            <p>ただツールを使うだけではなく、AIの仕組みを理解し、実際のビジネス課題を解決できるスキルを身につけます。未経験からでも、市場価値の高いAI人材へと成長できます。</p>
                        </div>
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 02</span>
                            <h4>収益化するまで全力サポート</h4>
                            <p>「教えて終わり」ではありません。実際に収益が発生するまで、徹底的にサポートし続けます。コンサル生の中には、開始初月で150万円の収益化に成功した事例もございます。</p>
                            <p style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>※ 「月100万円」などの金額は目標例であり、成果を保証するものではありません。</p>
                        </div>
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 03</span>
                            <h4>再現性の高いノウハウ</h4>
                            <p>未経験からでも結果を出せる、再現性の高いノウハウを提供します。個人の力を資産に変え、AI時代に取り残されないスキルを身につけます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section" ref={statsRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">実績紹介</h2>
                    <p className="section-subtitle fade-in-up">※ 詳細な収益実績グラフ等は準備中です。</p>
                    <ul className="stats-list-modern fade-in-up">
                        <li>
                            <span>初月最高収益</span>
                            <strong>150万円</strong>
                        </li>
                        <li>
                            <span>受講生数</span>
                            <strong>100+ 名</strong>
                        </li>
                        <li>
                            <span>収益化達成率</span>
                            <strong>80%以上</strong>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gray" ref={ctaRef}>
                <div className="container text-center">
                    <div className="fade-in-up">
                        <h2 className="section-title">お問い合わせ</h2>
                        <p className="section-subtitle" style={{ marginBottom: '30px' }}>
                            まずは無料相談からスタート。<br />
                            AI副業・学習についてお気軽にご相談ください。
                        </p>
                        <Link to="/contact" className="btn-primary">
                            お問い合わせフォームへ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
