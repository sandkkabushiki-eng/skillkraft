import { Helmet } from 'react-helmet-async'

export default function SideJobPage() {
    return (
        <div className="detail-page container">
            <Helmet>
                <title>AIサボ | AI学習プラットフォーム | スキルクラフト</title>
                <meta name="description" content="AIの本質的な学習ができるプラットフォーム「AIサボ」。副業から独立まで、実践的なAIスキル習得をサポートします。" />
                <meta name="keywords" content="AIサボ,AI学習,AI副業,副業支援,スキルクラフト,Skill Kraft" />
                <meta property="og:title" content="AIサボ | AI学習プラットフォーム" />
                <meta property="og:description" content="AIの本質的な学習ができるプラットフォーム「AIサボ」。副業から独立まで、実践的なAIスキル習得をサポートします。" />
                <meta property="og:url" content="https://skillkraft.xyz/side-job" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://skillkraft.xyz/side-job" />
            </Helmet>
            <div className="detail-hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #003366 0%, #001a33 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* Learning Background */}
                <div className="sns-hero-pattern"></div>
                <div className="sns-floating-icons">
                    <div className="sns-icon-block">Video</div>
                    <div className="sns-icon-block">Chat</div>
                    <div className="sns-icon-block">Text</div>
                    <div className="sns-icon-block">Learn</div>
                    <div className="sns-icon-block">Earn</div>
                </div>

                <div className="container text-center" style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
                    <h1 className="detail-title" style={{ color: 'white', marginBottom: '20px', fontSize: '3rem' }}>AIサボ | AI Learning Platform</h1>
                    <p className="detail-subtitle" style={{ color: '#e0e0e0', fontSize: '1.2rem' }}>AI副業 × 学習プラットフォーム</p>
                </div>
            </div>

            <section className="detail-section">
                <img src="/images/sidejob.png" alt="AI Sabo Platform" className="detail-image" />
                <h2 className="detail-heading">AI時代に取り残されないための、実践的学習プラットフォーム</h2>
                <p>
                    急速に進化するAI社会において、ただツールを使うだけでは不十分です。<br />
                    AIサボは、AIの本質的な理解から、実際の案件獲得・収益化までを一気通貫でサポート。<br />
                    未経験からでも、市場価値の高いAI人材へと成長できます。
                </p>
            </section>

            <section className="detail-section highlight-box">
                <h2 className="detail-heading">初月収益150万円達成</h2>
                <p className="strong-text">
                    コンサル生の中には、開始初月で150万円の収益化に成功した事例もございます。<br />
                    未経験からでも結果を出せる再現性の高いノウハウを提供します。
                </p>
                <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>※ 詳細な収益実績グラフ等は準備中です。</p>
            </section>

            <section className="detail-section">
                <h2 className="detail-heading">収益化するまで全力サポート</h2>
                <p>
                    「教えて終わり」ではありません。<br />
                    実際に収益が発生するまで、徹底的にサポートし続けます。
                </p>
            </section>

            <div className="cta-section">
                <p className="mb-4">まずは無料相談からスタート</p>
                <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="contact-button-premium">
                    副業相談・お問い合わせへ進む
                </a>
                <p className="contact-note">※ Googleフォームへ移動します</p>
            </div>
        </div>
    )
}
