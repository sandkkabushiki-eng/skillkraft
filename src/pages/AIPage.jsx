import { Helmet } from 'react-helmet-async'

export default function AIPage() {
    return (
        <div className="detail-page container">
            <Helmet>
                <title>AI導入支援 | AI副業 | スキルクラフト</title>
                <meta name="description" content="スキルクラフトのAI導入支援サービス。業務効率化のためのAI導入、AI副業支援。自社専用アプリ開発やオペレーションの自動化で、20人分の業務を5人で回す体制を構築します。" />
                <meta name="keywords" content="AI導入,AI副業,業務効率化,AIアプリ開発,オートメーション,Skill Kraft,SkillKraft,スキルクラフト" />
                <meta property="og:title" content="AI導入支援 | 株式会社Skill Kraft" />
                <meta property="og:description" content="業務効率化のためのAI導入支援。自社専用アプリ開発やオペレーションの自動化で、20人分の業務を5人で回す体制を構築します。" />
                <meta property="og:url" content="https://skillkraft.xyz/ai" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://skillkraft.xyz/ai" />
            </Helmet>
            <div className="detail-hero">
                <h1 className="detail-title">AI導入支援 | スキルクラフト</h1>
                <p className="detail-subtitle">業務効率化・独自アプリ開発・AI副業支援</p>
            </div>

            <section className="detail-section">
                <img src="/images/ai.png" alt="AI Efficiency" className="detail-image" />
                <h2 className="detail-heading">20人の業務を5人で回す</h2>
                <p>
                    AI導入により、従業員20名規模の業務をわずか5名で回す体制を構築した事例がございます。<br />
                    人件費の削減だけでなく、意思決定のスピードアップと利益率の向上を実現します。
                </p>
            </section>

            <section className="detail-section">
                <h2 className="detail-heading">独自アプリケーション開発</h2>
                <p>
                    既存のAIツール（ChatGPT等）の導入支援にとどまらず、<br />
                    <strong>「貴社の業務に完全にフィットした独自アプリ」</strong>を開発・提供します。<br />
                    本当に必要なAI機能だけを抽出し、無駄のない業務フローを設計します。
                </p>
                <p style={{ marginTop: '20px' }}>
                    また、業務改善だけでなく<strong>「SNS運用に特化したアプリ」</strong>の開発実績もございます。<br />
                    ご興味のある方は、お気軽にお問い合わせください。
                </p>
            </section>

            <div className="cta-section">
                <p className="mb-4">業務効率化・アプリ開発のご相談はこちら</p>
                <a href="https://docs.google.com/forms/d/1_94L8NqWVh4SZxVzKXt2Yh4dsBaS6ZBAqSJ9lvoYfhk/viewform" target="_blank" rel="noopener noreferrer" className="contact-button-premium">
                    お問い合わせフォームへ進む
                </a>
                <p className="contact-note">※ Googleフォームへ移動します</p>
            </div>
        </div>
    )
}
