import ServiceCard from '../components/ServiceCard'
import SpaceBackground from '../components/SpaceBackground'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <div className="home-container">
            <Helmet>
                <title>スキルクラフト | 秒で仕事を終わらせる | AI導入支援</title>
                <meta name="description" content="秒で仕事を終わらせる。スキルクラフトはAI導入とSNSマーケティングで、あなたのビジネスを劇的に加速させます。" />
                <meta name="keywords" content="AI導入,AI導入支援,AI活用,スキルクラフト,Skill Kraft,SNSマーケティング,DX,業務効率化" />
                <meta property="og:title" content="スキルクラフト | AI導入支援のプロフェッショナル" />
                <meta property="og:description" content="AI×SNSでビジネスを加速。株式会社Skill Kraftの公式ホームページです。" />
                <meta property="og:image" content="https://skillkraft.xyz/アイコン.gif" />
                <meta property="og:url" content="https://skillkraft.xyz/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="株式会社Skill Kraft" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="スキルクラフト | AI導入支援のプロフェッショナル" />
                <meta name="twitter:description" content="AI×SNSでビジネスを加速。株式会社Skill Kraftの公式ホームページです。" />
                <meta name="twitter:image" content="https://skillkraft.xyz/アイコン.gif" />
                <link rel="canonical" href="https://skillkraft.xyz/" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "株式会社Skill Kraft",
                        "alternateName": ["Skill Kraft Inc.", "Skill Kraft", "SkillKraft", "スキルクラフト"],
                        "url": "https://skillkraft.xyz",
                        "logo": "https://skillkraft.xyz/vite.svg",
                        "description": "スキルクラフト（株式会社Skill Kraft）の公式ホームページ。SNSマーケティング、AI導入支援、AI副業コンサルティングを通じて、個人と企業のポテンシャルを解放します。",
                        "address": {
                            "@type": "PostalAddress",
                            "addressRegion": "福岡県",
                            "addressLocality": "遠賀郡",
                            "streetAddress": "下二東15-17"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "sandkkabushiki@gmail.com",
                            "contactType": "customer service"
                        },
                        "founder": {
                            "@type": "Person",
                            "name": "中村 昇継"
                        },
                        "foundingDate": "2025-09-25",
                        "sameAs": []
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <SpaceBackground />
                <div className="hero-content">
                    <h1 className="hero-title">
                        <div className="hero-highlight fade-in-delay-1">秒で</div>
                        <div className="hero-highlight fade-in-delay-2">仕事を</div>
                        <div className="hero-highlight fade-in-delay-3" style={{ color: 'var(--color-secondary)' }}>終わらせる</div>
                    </h1>
                    <p className="hero-subtitle">Skill Kraft Inc.</p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section container">
                    <h2 className="section-title">事業内容 | スキルクラフト</h2>
                <div className="services-grid">
                    <Link to="/sns">
                        <ServiceCard
                            title="SNS × AIコンサルティング"
                            badge="拡散"
                            description="Instagram、X、TikTokなどの運用代行。AIを活用した効率的な戦略立案からコンテンツ制作まで一貫してサポート。クリックして詳細を見る"
                        />
                    </Link>
                    <Link to="/ai">
                        <ServiceCard
                            title="AI導入支援"
                            badge="革新"
                            description="業務効率化のためのAI導入、独自アプリ開発。最新テクノロジーでビジネスを加速。クリックして詳細を見る"
                        />
                    </Link>
                    <Link to="/side-job">
                        <ServiceCard
                            title="副業コンサルティング"
                            badge="飛躍"
                            description="個人のスキルを活かした副業立ち上げから収益化までマンツーマンサポート。クリックして詳細を見る"
                        />
                    </Link>
                </div>
            </section>

            {/* Contact Section - Moved Up */}
            <section id="contact" className="section bg-gray">
                <div className="container text-center">
                    <h2 className="section-title">お問い合わせ</h2>
                    <p className="contact-text">
                        お仕事のご依頼・ご相談は、以下のフォームよりお気軽にご連絡ください。<br />
                        担当者より24時間以内に折り返しご連絡いたします。
                    </p>
                    <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="contact-button-premium">
                        お問い合わせフォームへ進む
                    </a>
                    <p className="contact-note">※ Googleフォームへ移動します</p>
                </div>
            </section>

            {/* Company Section - Moved Down */}
            <section id="company" className="section bg-white text-center">
                <div className="container">
                    <h2 className="section-title">会社概要</h2>
                    <div className="company-info">
                        <dl className="company-list">
                            <div className="company-item">
                                <dt>会社名</dt>
                                <dd>(株)Skill Kraft</dd>
                            </div>
                            <div className="company-item">
                                <dt>代表者</dt>
                                <dd>中村 昇継</dd>
                            </div>
                            <div className="company-item">
                                <dt>創業</dt>
                                <dd>2025年9月25日</dd>
                            </div>
                            <div className="company-item">
                                <dt>所在地</dt>
                                <dd>福岡県遠賀郡下二東15-17</dd>
                            </div>
                            <div className="company-item">
                                <dt>連絡先</dt>
                                <dd>sandkkabushiki@gmail.com</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}
