import ContactForm from '../components/ContactForm'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ContactPage() {
    const baseUrl = 'https://skillkraft.xyz'
    const pageUrl = `${baseUrl}/contact`
    const title = 'お問い合わせ | スキルクラフト（SNSマーケティング・AI導入・副業支援）'
    const description =
        'スキルクラフトへのお問い合わせはこちら。SNSマーケティング、AI導入支援（業務改善アプリ開発）、副業支援（AIサボ）のご相談・お見積もりは無料です。'
    const keywords =
        'スキルクラフト,Skill Kraft,お問い合わせ,SNSマーケティング,AI導入,業務効率化,AIアプリ開発,副業支援,AI副業'

    const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '相談は無料ですか？',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'はい、初回のご相談・お見積もりは完全無料です。',
                },
            },
            {
                '@type': 'Question',
                name: '開発期間はどのくらいですか？',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'プロジェクトの規模によりますが、最短2週間〜、平均1〜2ヶ月程度で納品可能です。',
                },
            },
            {
                '@type': 'Question',
                name: '予算があまりないのですが...',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'ご予算に合わせたプランをご提案いたします。月額数万円からのスタートも可能です。',
                },
            },
        ],
    }

    return (
        <div className="container" style={{ padding: '120px 20px 80px' }}>
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
                <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
            </Helmet>
            
            <div className="contact-page-layout">
                {/* Left Column: Information & FAQ */}
                <div className="contact-info-col">
                    <div className="info-box">
                        <h2 className="info-title">Consultation</h2>
                        <h3 className="info-subtitle">無料相談・お見積もり</h3>
                        <p className="info-text">
                            Skill Kraftのサービスにご興味をお持ちいただきありがとうございます。<br />
                            AI導入、SNSマーケティング、業務効率化など、ビジネスの課題解決についてお気軽にご相談ください。
                        </p>
                        
                        <div className="info-points">
                            <h4>こんな方におすすめ</h4>
                            <ul>
                                <li>AIを導入したいが何から始めればいいかわからない</li>
                                <li>SNS運用で成果が出ない、リソースが足りない</li>
                                <li>社内の業務フローを自動化してコストを削減したい</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-box">
                        <h3 className="faq-title">よくある質問</h3>
                        <div className="faq-item">
                            <div className="faq-q">Q. 相談は無料ですか？</div>
                            <div className="faq-a">A. はい、初回のご相談・お見積もりは完全無料です。</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">Q. 開発期間はどのくらいですか？</div>
                            <div className="faq-a">A. プロジェクトの規模によりますが、最短2週間〜、平均1〜2ヶ月程度で納品可能です。</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-q">Q. 予算があまりないのですが...</div>
                            <div className="faq-a">A. ご予算に合わせたプランをご提案いたします。月額数万円からのスタートも可能です。</div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-col">
                    <div className="contact-section-box">
                        <h2 className="section-title">Contact Form</h2>
                        <p className="contact-text mb-8 text-center" style={{ fontSize: '0.9rem' }}>
                            下記フォームに必要事項をご入力ください。<br />
                            <span className="required">*</span> は必須項目です。
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

