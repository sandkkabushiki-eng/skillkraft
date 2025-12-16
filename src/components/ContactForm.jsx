import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        name: '',
        phone: '',
        email: '',
        budget: '',
        adSpend: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // ここに送信処理（EmailJSなど）を記述します
        // いったん擬似的な遅延を入れて成功表示の確認ができるようにします
        setTimeout(() => {
            setStatus('success');
            setFormData({ 
                company: '',
                role: '',
                name: '',
                phone: '',
                email: '',
                budget: '',
                adSpend: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="company">会社名・事業者名 <span className="required">*</span></label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="株式会社Skill Kraft"
                />
            </div>
            <div className="form-group">
                <label htmlFor="role">役職 <span className="required">*</span></label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="代表取締役"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">氏名 <span className="required">*</span></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="山田 太郎"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">電話番号 <span className="required">*</span></label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="09012345678"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="budget">月々のご予算 <span className="required">*</span></label>
                <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="form-select"
                >
                    <option value="">選択してください</option>
                    <option value="20~50万円">20~50万円</option>
                    <option value="50~100万円">50~100万円</option>
                    <option value="100~200万円">100~200万円</option>
                    <option value="200万円以上">200万円以上</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="adSpend">年間の広告費用</label>
                <input
                    type="text"
                    id="adSpend"
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    placeholder="1200万円/年"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="サービス説明希望の方は記載ください。また、サービスに関する質問をご自由に記入ください。"
                ></textarea>
            </div>
            
            <button 
                type="submit" 
                className="contact-button-premium submit-button"
                disabled={status === 'submitting' || status === 'success'}
            >
                {status === 'submitting' ? '送信中...' : status === 'success' ? '送信完了！' : '送信する'}
            </button>

            {status === 'success' && (
                <p className="success-message">お問い合わせありがとうございます。確認次第、ご連絡いたします。</p>
            )}
        </form>
    );
}
