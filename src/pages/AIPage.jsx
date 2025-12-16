import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AIPage() {
    return (
        <div className="detail-page">
            <Helmet>
                <title>AI導入支援 | 秒で仕事を終わらせる | スキルクラフト</title>
                <meta name="description" content="スキルクラフトのAI導入支援。業務フローをAIで最適化し、秒で仕事を終わらせる生産性を実現します。" />
                <meta name="keywords" content="AI導入,AI副業,業務効率化,AIアプリ開発,オートメーション,Skill Kraft,SkillKraft,スキルクラフト" />
                <meta property="og:title" content="AI導入支援 | 株式会社Skill Kraft" />
                <meta property="og:description" content="業務効率化のためのAI導入支援。自社専用アプリ開発やオペレーションの自動化で、20人分の業務を5人で回す体制を構築します。" />
                <meta property="og:url" content="https://skillkraft.xyz/ai" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://skillkraft.xyz/ai" />
            </Helmet>

            {/* LP Hero */}
            <header className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* AI Tech Background */}
                <div className="sns-hero-pattern"></div>
                <div className="sns-floating-icons">
                    <div className="sns-icon-block">GPT</div>
                    <div className="sns-icon-block">Claude</div>
                    <div className="sns-icon-block">Gemini</div>
                    <div className="sns-icon-block">Python</div>
                    <div className="sns-icon-block">React</div>
                </div>

                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="hero-title" style={{ color: 'white', marginBottom: '20px' }}>
                        SaaSの時代は終わり。<br />
                        <span style={{ color: '#c0a062' }}>「会社に合った」</span>AIアプリを。
                    </h1>
                    <p className="hero-subtitle" style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>
                        誰のためのAIか。<br />
                        使いやすさに徹底的にこだわり、御社の業務を劇的に効率化します。
                    </p>
                </div>
            </header>

            {/* Pain Points */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">こんなお悩みありませんか？</h2>
                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', marginBottom: '50px' }}>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>SaaSツールが合わない...</h3>
                            <p>月額料金はかかるのに、本当に欲しい機能がなかったり、逆に機能が多すぎて使いこなせない。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>業務が属人化している...</h3>
                            <p>特定の社員しかできない作業が多く、その人が休むと業務が止まってしまう。</p>
                        </div>
                        <div className="highlight-box text-center">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>AI導入の方法がわからない...</h3>
                            <p>ChatGPTは使っているが、社内業務にどう組み込めばいいか、何から始めればいいかわからない。</p>
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
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>御社専用の業務改善アプリ開発</h4>
                            <p>既存のSaaSツールに業務を合わせるのではなく、<strong>御社の業務フローに完全にフィットした独自のAIアプリ</strong>を開発します。本当に必要な機能だけを抽出し、無駄のない業務フローを設計します。</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 02</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>20人の業務を5人で回す体制構築</h4>
                            <p>AI導入により、従業員20名規模の業務をわずか5名で回す体制を構築した実績がございます。人件費の削減だけでなく、意思決定のスピードアップと利益率の向上を実現します。</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block' }}>Benefit 03</h3>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>開発実績をYouTubeで公開</h4>
                            <p>実際に開発したアプリのデモ動画をYouTubeで公開しています。自動見積もり作成アプリ、社内Wiki検索Bot、日報自動生成ツールなど、具体的な実績をご確認いただけます。</p>
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                <div className="youtube-placeholder" style={{ 
                                    background: '#000', 
                                    color: '#fff', 
                                    padding: '40px 20px', 
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>【近日公開】開発実績動画</p>
                                </div>
                            </div>
                        </div>
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
                            <span>業務効率化率</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>75%削減</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>人件費削減</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>20人→5人</strong>
                        </li>
                        <li style={{ background: 'white', padding: '20px', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>開発アプリ数</span>
                            <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>10+ アプリ</strong>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">お問い合わせ</h2>
                    <p className="mb-8">
                        業務効率化・アプリ開発のご相談はこちら。<br />
                        まずは現状の課題をお聞かせください。
                    </p>
                    <Link to="/contact" className="contact-button-premium">
                        お問い合わせフォームへ
                    </Link>
                </div>
            </section>
        </div>
    )
}
