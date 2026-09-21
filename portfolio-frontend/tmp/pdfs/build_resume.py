from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "resume" / "Mykola_Kosmachevskyi_CV.pdf"


styles = getSampleStyleSheet()

INK = colors.HexColor("#1B1B1F")
MUTED = colors.HexColor("#5F6368")
ACCENT = colors.HexColor("#3454D1")
LINE = colors.HexColor("#D7D2C7")

base = ParagraphStyle(
    "Base",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.1,
    leading=11.3,
    textColor=INK,
    spaceAfter=3,
    alignment=TA_LEFT,
)

small = ParagraphStyle(
    "Small",
    parent=base,
    fontSize=8.4,
    leading=10.2,
    textColor=MUTED,
)

name = ParagraphStyle(
    "Name",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=24,
    leading=27,
    textColor=INK,
    spaceAfter=2,
)

role = ParagraphStyle(
    "Role",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=14,
    textColor=ACCENT,
    spaceAfter=5,
)

section = ParagraphStyle(
    "Section",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=10.4,
    leading=12,
    textColor=ACCENT,
    spaceBefore=7,
    spaceAfter=4,
)

item_title = ParagraphStyle(
    "ItemTitle",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=9.4,
    leading=11.4,
    spaceBefore=2,
    spaceAfter=0,
)

meta = ParagraphStyle(
    "Meta",
    parent=small,
    fontName="Helvetica-Bold",
    textColor=MUTED,
    spaceAfter=2,
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=base,
    leftIndent=8,
    firstLineIndent=0,
    bulletIndent=0,
    spaceAfter=2,
)


def p(text, style=base):
    return Paragraph(text, style)


def section_block(title):
    return [
        Spacer(1, 1.5),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=2, spaceAfter=4),
        p(title, section),
    ]


def bullets(items):
    return ListFlowable(
        [
            ListItem(
                Paragraph(item, bullet_style),
                bulletColor=ACCENT,
                leftIndent=9,
            )
            for item in items
        ],
        bulletType="bullet",
        start="circle",
        leftIndent=10,
        bulletFontName="Helvetica",
        bulletFontSize=5,
    )


def job(title, org, period, items):
    return KeepTogether(
        [
            p(title, item_title),
            p(f"{org} | {period}", meta),
            bullets(items),
            Spacer(1, 2),
        ]
    )


def project(title, period, summary, stack):
    return KeepTogether(
        [
            p(title, item_title),
            p(period, meta),
            p(summary, base),
            p(f"<b>Stack:</b> {stack}", small),
            Spacer(1, 2),
        ]
    )


def build():
    doc = BaseDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Mykola Kosmachevskyi CV",
        author="Mykola Kosmachevskyi",
    )

    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        id="normal",
    )
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])

    story = [
        p("Mykola Kosmachevskyi", name),
        p(".NET Developer", role),
        p(
            "Sweden | +380 63 737 6245 | kkosmacevskij@gmail.com | GitHub: https://github.com/",
            small,
        ),
        Spacer(1, 5),
    ]

    story += section_block("SUMMARY")
    story.append(
        p(
            ".NET Developer with 3+ years of experience building commercial web applications, backend APIs, and integrations. "
            "Strong focus on ASP.NET Core, PostgreSQL, Entity Framework Core, JWT authentication, email flows, Cloudinary, "
            "REST API design, and GDPR-aware personal data handling. Comfortable taking business requirements from idea to "
            "maintainable implementation with clean code, practical architecture, and reliable delivery.",
            base,
        )
    )

    story += section_block("TECHNICAL SKILLS")
    story += [
        p("<b>Backend:</b> .NET 6-10, .NET 10 LTS, .NET 9, .NET 8 LTS, .NET 7, .NET 6 LTS, C#, ASP.NET Core, ASP.NET MVC, Web API, RESTful API design, EF Core 6-10, LINQ, dependency injection, clean architecture basics", base),
        p("<b>Databases:</b> PostgreSQL, Microsoft SQL Server, SQL, query optimization, migrations, indexes, relational database design", base),
        p("<b>Frontend:</b> React, TypeScript, JavaScript, Vite, HTML5, CSS3, Tailwind CSS, responsive layout, API integration", base),
        p("<b>Security & compliance:</b> JWT auth, refresh tokens, HTTP-only cookies, role-based access control, GDPR basics, personal data handling, privacy-aware API design, data validation", base),
        p("<b>Tools:</b> Git, GitHub, Visual Studio, VS Code, Postman, Swagger/OpenAPI, Docker basics, npm, Chrome DevTools", base),
    ]

    story += section_block("EXPERIENCE")
    story.append(
        job(
            ".NET Backend Developer - Commercial Project",
            "AutoAlexDE",
            "2026 - Present",
            [
                "Developed and maintained a production-ready ASP.NET Core backend for an automotive business with a car catalog, customer requests, users, and admin operations.",
                "Configured PostgreSQL with Entity Framework Core migrations and domain models for Cars, CarRequests, Users, EmailConfirmationTokens, and PasswordResetTokens.",
                "Implemented JWT authentication with refresh tokens in HTTP-only cookies, Google login, email confirmation, password reset, and role-based authorization for admin features.",
                "Integrated Cloudinary image upload/delete for car photos, production CORS configuration, multilingual car descriptions, and GDPR-aware account deletion flows.",
                "Reduced public data exposure by masking VIN values for anonymous users and keeping sensitive authentication data in secure cookies.",
            ],
        )
    )
    story.append(
        job(
            ".NET Developer",
            "Nordic Code Solutions",
            "June 2023 - July 2026",
            [
                "Worked on commercial web applications for small and medium-sized businesses, building backend solutions with .NET 6-10 / ASP.NET Core and database integrations.",
                "Designed REST APIs, DTO models, service-layer logic, validation workflows, Swagger documentation, and maintainable business logic.",
                "Optimized SQL queries and worked with Entity Framework Core, SQL Server, and PostgreSQL to improve data access reliability and performance.",
                "Implemented authentication, GDPR-aware personal data handling, and React/TypeScript UI integrations.",
                "Participated in code reviews, debugging, refactoring legacy modules, and migrating systems toward modern .NET architecture.",
            ],
        )
    )
    story.append(
        job(
            "Cyber Police Experience",
            "Cyber Police of Ukraine",
            "2022",
            [
                "Worked in cybercrime counteraction at the beginning of the war against the Russian aggressor, supporting efforts to identify and disrupt criminal digital activity.",
                "Analyzed digital data, OSINT materials, logs, and technical indicators to help detect suspicious behavior and document relevant digital traces.",
                "Supported authorized data interception and analysis tasks in an investigative context, with attention to operational discipline and lawful handling of sensitive information.",
                "Gained practical experience in ethical hacking, security testing, threat analysis, and cooperation around cybercrime prevention.",
            ],
        )
    )

    story += section_block("COMMERCIAL & PERSONAL PROJECTS")
    story.append(
        project(
            "AutoAlexDE",
            "Commercial backend API",
            "Backend API for an automotive business with authentication, car catalog management, customer requests, admin operations, image handling, multilingual content, and GDPR-aware personal data flows.",
            "ASP.NET Core, C#, PostgreSQL, EF Core, JWT, Google Auth, Cloudinary, MailKit, GDPR",
        )
    )
    story.append(
        project(
            "Task Management Web App",
            "Personal full-stack project",
            "Task management application where users can create, update, and delete tasks with a React/TypeScript interface and PostgreSQL-backed data storage.",
            "ASP.NET Core, PostgreSQL, React, TypeScript, Git",
        )
    )

    story += section_block("EDUCATION")
    story += [
        p("B.S. Computer Science", item_title),
        p("Odesa National Polytechnic University, Odesa, Ukraine | 2022 - 2026", meta),
        p(
            "Completed Computer Science studies with focus on Software Engineering, Calculus & Geometry, Algorithms & Data Structures, Architectural Patterns, Databases, Web Development, and DevOps.",
            base,
        ),
    ]

    story += section_block("LANGUAGES")
    story += [
        p("Ukrainian - native | English - CEFR C1 | Swedish - beginner", base),
    ]

    story += section_block("SOFT SKILLS")
    story += [
        p(
            "Problem-solving, communication, adaptability, teamwork, time management, attention to detail, ownership of technical tasks, and clear explanation of engineering decisions.",
            base,
        )
    ]

    doc.build(story)


if __name__ == "__main__":
    build()
