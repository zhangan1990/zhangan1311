// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const heroSection = document.getElementById('home');

    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 滚动时平滑显示section
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });

    // 移动端导航菜单
    burger.addEventListener('click', function() {
        burger.classList.toggle('toggle');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接关闭菜单
    const navLinksArray = document.querySelectorAll('.nav-links a');
    navLinksArray.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 项目经验时间线动画
    function animateTimeLine() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, 100 * index);
        });
    }

    // 页面加载动画
    function initAnimations() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // 触发一次滚动事件来显示可见区域的section
        window.dispatchEvent(new Event('scroll'));
        animateTimeLine();
    }

    // 技能水平条动画
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // 滚动时检测是否需要动画
    function checkScroll() {
        const skillsSection = document.querySelector('#skills');
        if (!skillsSection) return;
        
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (skillsTop < windowHeight * 0.8) {
            animateSkills();
        }
    }

    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 这里可以添加表单验证和提交逻辑
            alert(`感谢您的留言，${name}！我会尽快回复您。`);
            
            // 重置表单
            contactForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // 这里可以添加订阅逻辑
            alert(`感谢您的订阅，我们会将最新内容发送到 ${email}`);
            
            // 重置表单
            newsletterForm.reset();
        });
    }

    // 初始化动画
    initAnimations();
    
    // 检查是否需要技能动画
    checkScroll();
    
    // 滚动时检查是否需要技能动画
    window.addEventListener('scroll', function() {
        checkScroll();
    });

    // 汉堡菜单动画
    document.querySelector('.burger').addEventListener('click', function() {
        this.classList.toggle('toggle');
    });
});

// 汉堡菜单动画样式
const style = document.createElement('style');
style.textContent = `
    .burger div {
        transition: var(--transition);
    }
    
    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .burger.toggle .line2 {
        opacity: 0;
    }
    
    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .nav-links.active {
        transform: translateY(0);
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);