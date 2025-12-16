import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import '../components/SpaceBackground.css'

export default function Home() {
    return (
        <div className="home-container">
            <Helmet>
                <title>スキルクラフト | 秒で仕事を終わらせる | AI導入支援</title>
                <meta name="description" content="スキルクラフトは、AI活用とSNSマーケティングでビジネスの課題を解決するプロフェッショナルチームです。" />
                <meta name="keywords" content="AI導入,AI活用,スキルクラフト,Skill Kraft,SNSマーケティング,DX,業務効率化" />
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
                    <a href="#services" className="contact-button-premium">
                        サービスを見る
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">Service</h2>
                    <div className="services-grid">
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
                </div>
            </section>

            {/* Contact Section (CTA) */}
            <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Background Decorations */}
                <div className="mc-cloud" style={{ top: '15%', left: '5%' }}></div>
                <div className="mc-cloud" style={{ top: '25%', right: '10%', animationDelay: '2s' }}></div>
                <div className="mc-grass-floor"></div>

                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="contact-section-box" style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'visible' }}>
                        {/* Decorative Elements */}
                        <div className="minecraft-decoration mc-char"></div>
                        <div className="minecraft-decoration mc-block"></div>

                        <h2 className="section-title">Contact</h2>
                        <p className="contact-text mb-8">
                            スキルクラフトへのお問い合わせ、お見積もりのご依頼は<br />
                            下記ボタンよりお問い合わせページへお進みください。
                        </p>
                        <Link to="/contact" className="contact-button-premium">
                            お問い合わせフォームへ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <section id="company" className="section bg-gray">
                <div className="container">
                    <h2 className="section-title">Company</h2>
                    <div className="company-info" style={{ maxWidth: '800px', width: '100%' }}>
                        <dl className="company-list" style={{ display: 'grid', gap: '20px' }}>
                            <div className="company-item" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                <dt style={{ width: '120px', fontWeight: 'bold' }}>会社名</dt>
                                <dd>(株)Skill Kraft</dd>
                            </div>
                            <div className="company-item" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                <dt style={{ width: '120px', fontWeight: 'bold' }}>代表者</dt>
                                <dd>中村 昇継</dd>
                            </div>
                            <div className="company-item" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                <dt style={{ width: '120px', fontWeight: 'bold' }}>所在地</dt>
                                <dd>福岡県遠賀郡下二東15-17</dd>
                            </div>
                            <div className="company-item" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                <dt style={{ width: '120px', fontWeight: 'bold' }}>連絡先</dt>
                                <dd>sandkkabushiki@gmail.com</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}
