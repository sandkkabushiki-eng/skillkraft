import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import useScrollAnimation from '../hooks/useScrollAnimation'
import '../components/SpaceBackground.css'

export default function Home() {
    const baseUrl = 'https://skillkraft.xyz'
    const pageUrl = `${baseUrl}/`
    const title = 'スキルクラフト | SNSマーケティング・AI導入支援・副業支援'
    const description =
        'スキルクラフト（株式会社Skill Kraft）の公式サイト。SNSマーケティング、AI導入支援（業務改善アプリ開発）、副業支援（AIサボ）で、個人と企業の成果にコミットします。'
    const keywords =
        'スキルクラフト,Skill Kraft,SNSマーケティング,SNS運用,AI導入,AI活用,AIアプリ開発,業務効率化,DX,副業支援,AI副業,月100万円'

    const organizationLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '株式会社Skill Kraft',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
    }

    const websiteLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'スキルクラフト | 株式会社Skill Kraft',
        url: baseUrl,
    }

    const servicesRef = useScrollAnimation()
    const statsRef = useScrollAnimation()
    const ctaRef = useScrollAnimation()
    const companyRef = useScrollAnimation()

    return (
        <div className="home-container">
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
                <script type="application/ld+json">{JSON.stringify(organizationLd)}</script>
                <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg-3d">
                    <div className="hero-grid-plane"></div>
                </div>

                <div className="hero-content">
                    <img src="/logo.png" alt="Skill Kraft Logo" className="hero-logo" />
                    <h1 className="hero-title">
                        AI × SNSで、<br />
                        <span className="hero-highlight">事業を「覚醒」させる。</span>
                    </h1>
                    <p className="hero-subtitle">
                        誰のためのAIか。<br />
                        使いやすさに徹底的にこだわり、<br />
                        あなたの会社のポテンシャルを最大限に解放します。
                    </p>
                    <div className="hero-buttons">
                        <a href="#services" className="btn-primary">
                            サービスを見る
                        </a>
                        <Link to="/contact" className="btn-outline">
                            無料相談はこちら
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section" ref={statsRef}>
                <div className="container">
                    <div className="stats-row fade-in-up">
                        <div className="stat-item">
                            <div className="stat-number">2,000万</div>
                            <div className="stat-label">SNSリーチ数</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">75%</div>
                            <div className="stat-label">業務効率化率</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">支援実績</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">150万</div>
                            <div className="stat-label">初月最高収益</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section bg-gray" ref={servicesRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">Service</h2>
                    <p className="section-subtitle fade-in-up">
                        3つの事業で、「使いやすさ」と「成果」にこだわって伴走します。
                    </p>
                    <div className="services-grid stagger-children">
                        <Link to="/sns">
                            <ServiceCard
                                title="SNS × AI Marketing"
                                badge="集客改善"
                                description="ただの運用代行ではありません。AI分析に基づいた戦略で、フォロワー数よりも「売上」にコミットするSNSマーケティング。"
                            />
                        </Link>
                        <Link to="/ai">
                            <ServiceCard
                                title="AI DX Consulting"
                                badge="業務効率化"
                                description="SaaSの時代は終わり。既存ツールに業務を合わせるのではなく、御社専用の業務改善アプリを開発。YouTubeで実績公開中。"
                            />
                        </Link>
                        <Link to="/side-job">
                            <ServiceCard
                                title="AIサボ"
                                badge="学習PF"
                                description="AI時代に取り残されないために。本質的なAIスキルと収益化ノウハウを学び、個人の力を資産に変える学習プラットフォーム。"
                            />
                        </Link>
                    </div>
                    <p className="section-subtitle fade-in-up" style={{ marginTop: '40px', marginBottom: 0 }}>
                        副業支援では、<strong>月100万円を目指す</strong>ロードマップ設計も行っています。<br />
                        <small style={{ color: '#94a3b8' }}>※目標であり成果を保証するものではありません</small>
                    </p>
                </div>
            </section>

            {/* Contact Section (CTA) */}
            <section className="section" ref={ctaRef}>
                <div className="container text-center">
                    <div className="fade-in-up" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="section-title">Contact</h2>
                        <p className="section-subtitle" style={{ marginBottom: '30px' }}>
                            まずはお気軽にご相談ください。<br />
                            初回のご相談・お見積もりは無料です。
                        </p>
                        <Link to="/contact" className="btn-primary">
                            お問い合わせフォームへ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <section id="company" className="section bg-gray" ref={companyRef}>
                <div className="container">
                    <h2 className="section-title fade-in-up">Company</h2>
                    <p className="section-subtitle fade-in-up">会社概要</p>
                    <div className="fade-in-up" style={{ maxWidth: '700px', width: '100%', margin: '0 auto' }}>
                        <div style={{
                            background: '#fff',
                            borderRadius: 'var(--radius-lg)',
                            padding: '40px',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--color-border)',
                        }}>
                            <dl style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    ['会社名', '(株)Skill Kraft'],
                                    ['代表者', '中村 昇継'],
                                    ['所在地', '福岡県遠賀郡下二東15-17'],
                                    ['連絡先', 'sandkkabushiki@gmail.com'],
                                ].map(([dt, dd]) => (
                                    <div key={dt} style={{
                                        display: 'flex',
                                        borderBottom: '1px solid var(--color-border)',
                                        paddingBottom: '16px',
                                    }}>
                                        <dt style={{
                                            width: '120px',
                                            fontWeight: '700',
                                            color: 'var(--color-text)',
                                            flexShrink: 0,
                                        }}>{dt}</dt>
                                        <dd style={{ color: 'var(--color-text-light)' }}>{dd}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
