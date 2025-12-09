import { Helmet } from 'react-helmet-async'

export default function SideJobPage() {
    return (
        <div className="detail-page container">
            <Helmet>
                <title>AI副業 | 副業コンサルティング | スキルクラフト</title>
                <meta name="description" content="スキルクラフトのAI副業コンサルティング。個人の力を「資産」に変える副業支援。AIとSNSを活用した収益化スキルをマンツーマンで指導し、経済的自立をサポートします。" />
                <meta name="keywords" content="AI副業,副業コンサルティング,副業,収益化,SNS副業,AI副業支援,Skill Kraft,SkillKraft,スキルクラフト" />
                <meta property="og:title" content="副業コンサルティング | 株式会社Skill Kraft" />
                <meta property="og:description" content="個人の力を「資産」に変える副業コンサルティング。SNSを活用した収益化スキルをマンツーマンで指導し、経済的自立をサポートします。" />
                <meta property="og:url" content="https://skillkraft.xyz/side-job" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://skillkraft.xyz/side-job" />
            </Helmet>
            <div className="detail-hero">
                <h1 className="detail-title">AI副業 | Side Job Consulting</h1>
                <p className="detail-subtitle">副業収益化支援 | スキルクラフト</p>
            </div>

            <section className="detail-section">
                <img src="/images/sidejob.png" alt="Side Job Success" className="detail-image" />
                <h2 className="detail-heading">AI副業で個人の力を「資産」に変える</h2>
                <p>
                    スキルクラフトでは、AIとSNSを活用したAI副業の立ち上げから収益化までをマンツーマンで指導します。<br />
                    あなたのスキルや経験を市場価値の高いコンテンツへと昇華させます。
                </p>
            </section>

            <section className="detail-section highlight-box">
                <h2 className="detail-heading">初月収益150万円達成</h2>
                <p className="strong-text">
                    コンサル生の中には、開始初月で150万円の収益化に成功した事例もございます。<br />
                    未経験からでも結果を出せる再現性の高いノウハウを提供します。
                </p>
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
