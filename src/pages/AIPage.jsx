import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function AIPage() {
    const baseUrl = 'https://skillkraft.xyz'
    const pageUrl = `${baseUrl}/ai`
    const title = 'AI導入支援（業務改善アプリ開発）| スキルクラフト'
    const description =
        'スキルクラフトのAI導入支援（AI DX）。御社専用の業務改善アプリ開発と自動化で、現場で本当に使えるAIを実装します。'
    const keywords =
        'スキルクラフト,Skill Kraft,AI導入,AI導入支援,AI DX,業務効率化,業務改善,AIアプリ開発,自動化,RPA,社内ツール開発,業務改善アプリ'

    const serviceLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI導入支援（AI DX）',
        serviceType: 'AI導入支援 / 業務改善アプリ開発',
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
            <header className="service-hero" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #162240 50%, #0d1b30 100%)' }}>
                <div className="floating-icons">
                    <div className="floating-icon">GPT</div>
                    <div className="floating-icon">AI</div>
                    <div className="floating-icon">DX</div>
                    <div className="floating-icon">PY</div>
                    <div className="floating-icon">API</div>
                </div>
                <div className="container text-center">
                    <h1>
                        SaaSの時代は終わり。<br />
                        <span className="hero-gold">「会社に合った」</span>AIアプリを。
                    </h1>
                    <p>
                        誰のためのAIか。<br />
                        使いやすさに徹底的にこだわり、御社の業務を劇的に効率化します。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section" ref={painRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">こんなお悩みありませんか？</h2>
                    <p className="section-subtitle fade-in-up">多くの企業が抱えるDXの課題</p>
                    <div className="pain-grid stagger-children">
                        <div className="pain-card">
                            <span className="pain-icon">🔧</span>
                            <h3>SaaSツールが合わない...</h3>
                            <p>月額料金はかかるのに、本当に欲しい機能がなかったり、逆に機能が多すぎて使いこなせない。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">👤</span>
                            <h3>業務が属人化している...</h3>
                            <p>特定の社員しかできない作業が多く、その人が休むと業務が止まってしまう。</p>
                        </div>
                        <div className="pain-card">
                            <span className="pain-icon">🤔</span>
                            <h3>AI導入の方法がわからない...</h3>
                            <p>ChatGPTは使っているが、社内業務にどう組み込めばいいか、何から始めればいいかわからない。</p>
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
                            <h4>御社専用の業務改善アプリ開発</h4>
                            <p>既存のSaaSツールに業務を合わせるのではなく、<strong>御社の業務フローに完全にフィットした独自のAIアプリ</strong>を開発します。本当に必要な機能だけを抽出し、無駄のない業務フローを設計します。</p>
                        </div>
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 02</span>
                            <h4>20人の業務を5人で回す体制構築</h4>
                            <p>AI導入により、従業員20名規模の業務をわずか5名で回す体制を構築した実績がございます。人件費の削減だけでなく、意思決定のスピードアップと利益率の向上を実現します。</p>
                        </div>
                        <div className="benefit-card fade-in-up">
                            <span className="benefit-number">Benefit 03</span>
                            <h4>開発実績をYouTubeで公開</h4>
                            <p>実際に開発したアプリのデモ動画をYouTubeで公開しています。自動見積もり作成アプリ、社内Wiki検索Bot、日報自動生成ツールなど、具体的な実績をご確認いただけます。</p>
                            <div style={{
                                marginTop: '20px',
                                background: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-light)',
                                padding: '30px 20px',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <p style={{ fontSize: '0.9rem' }}>【近日公開】開発実績動画</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section" ref={statsRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">実績紹介</h2>
                    <p className="section-subtitle fade-in-up">※ 今後、実際の事例を詳しく公開していく予定です。</p>
                    <ul className="stats-list-modern fade-in-up">
                        <li>
                            <span>業務効率化率</span>
                            <strong>75%削減</strong>
                        </li>
                        <li>
                            <span>人件費削減</span>
                            <strong>20人→5人</strong>
                        </li>
                        <li>
                            <span>開発アプリ数</span>
                            <strong>10+ アプリ</strong>
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
                            業務効率化・アプリ開発のご相談はこちら。<br />
                            まずは現状の課題をお聞かせください。
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
