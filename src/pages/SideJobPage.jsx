import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

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

    return (
        <div className="detail-page">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={pageUrl} />

                {/* OGP */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${baseUrl}/logo.png`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${baseUrl}/logo.png`} />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
            </Helmet>

            {/* LP Hero */}
            <header className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* Learning Background */}
                <div className="sns-hero-pattern"></div>
                <div className="sns-floating-icons">
                    <div className="sns-icon-block">Video</div>
                    <div className="sns-icon-block">Chat</div>
                    <div className="sns-icon-block">Text</div>
                    <div className="sns-icon-block">Learn</div>
                    <div className="sns-icon-block">Earn</div>
                </div>

                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="hero-title" style={{ color: 'white', marginBottom: '20px' }}>
                        AI時代に取り残されない。<br />
                        <span style={{ color: '#c0a062' }}>「収益化」</span>まで学べる。
                    </h1>
                    <p className="hero-subtitle" style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>
                        ただツールを使うだけでは不十分です。<br />
                        AIの本質的な理解から、実際の案件獲得・収益化まで一気通貫でサポート。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">こんなお悩みありませんか？</h2>
                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', marginBottom: '50px' }}>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>AIスキルを学びたいが...</h3>
                            <p>ChatGPTの使い方はわかるが、実際に仕事や副業にどう活かせばいいかわからない。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>収益化までできない...</h3>
                            <p>スキルは学んだが、実際に案件を獲得して収益化するまでの道のりがわからない。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>一人では続かない...</h3>
                            <p>独学で始めたが、モチベーションが続かず、結局何も身につかなかった。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">AIサボの解決策</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 01</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>本質的なAIスキルの習得</h4>
                            <p>ただツールを使うだけではなく、AIの仕組みを理解し、実際のビジネス課題を解決できるスキルを身につけます。未経験からでも、市場価値の高いAI人材へと成長できます。</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 02</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>収益化するまで全力サポート</h4>
                            <p>「教えて終わり」ではありません。実際に収益が発生するまで、徹底的にサポートし続けます。コンサル生の中には、開始初月で150万円の収益化に成功した事例もございます。</p>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>※ 「月100万円」などの金額は目標例であり、成果を保証するものではありません。</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 03</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>再現性の高いノウハウ</h4>
                            <p>未経験からでも結果を出せる、再現性の高いノウハウを提供します。個人の力を資産に変え、AI時代に取り残されないスキルを身につけます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">実績紹介</h2>
                    <p className="text-center mb-8">※ 詳細な収益実績グラフ等は準備中です。</p>
                    <ul className="stats-list" style={{ listStyle: 'none', maxWidth: '600px', margin: '0 auto' }}>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>初月最高収益</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>150万円</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>受講生数</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>100+ 名</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>収益化達成率</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>80%以上</strong>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">お問い合わせ</h2>
                    <p className="mb-8">
                        まずは無料相談からスタート。<br />
                        AI副業・学習についてお気軽にご相談ください。
                    </p>
                    <Link to="/contact" className="contact-button-premium">
                        お問い合わせフォームへ
                    </Link>
                </div>
            </section>
        </div>
    )
}
