# Workshop Page Structure Analysis

**目的**: FOUND @ ECCV 2026 のオーガナイザーから寄せられた「サイト構成の再編成」に関する指摘の妥当性を、他会議 (CVPR / ICCV / ECCV) の主要ワークショップページの実例と比較して評価する。

**調査日**: 2026-07-03
**調査対象**: 15例(CVPR 2024–2026 / ICCV 2025 / ECCV 2024)
**手法**: 各サイトを WebFetch で取得し、セクション構成・About見出しの扱い・Speakers 配置・Broader Impact の有無・CFP文言・情報密度・単一/複数ページ構造を記録

---

## 1. 現状の FOUND ECCV 2026 サイト構造

`src/app/routes/Home.tsx` から抽出した実際のセクション順序:

1. **Hero**(タイトル + 日程 + 会場 + CTA "Submit Nomination")
2. **Important Dates**
3. **Info card**(ポスター応募告知)+ **Latest News**
4. **About the Workshop**
   - サブ: Broader Impact (h3, glass-card)
   - サブ: Topics of Interest (h3)
5. **Call for Poster Nominations**(Format Notice / Guidelines / Selection / Presentation / Submit)
6. **Invited Speakers**
7. **Organizers**
8. **Sponsorship**(Intro / Benefits / Why / CTA)
9. **Contact Information**

トップレベル9セクション + Aboutに3つのh3、CFPに5つのサブブロック、Sponsorshipに4つのサブブロック。

---

## 2. オーガナイザーの指摘(整理済み)

| # | 指摘 |
|---|------|
| A | ポスター募集告知に「ECCV参加者限定」であることを明記(Info cardの本文とLatest News両方) |
| B | 「About the workshop」見出しは削除、本文(topics含む)はImportant Datesの上に移動 |
| C | Broader Impact はフッター化 |
| D | 現状は cluttered すぎる → 余白を取るか、別HTMLページに分割 |
| E | Descriptionの後は Speakers → Nomination の順に |

---

## 3. 調査データ(15サイト)

### 主要指標サマリ

| # | Workshop | 会議年 | 単一/複数 | 冒頭見出し | Speakers位置 | Broader Impact | CFP対面必須明記 | 密度 |
|---|---|---|---|---|---|---|---|---|
| 1 | MUSI | CVPR 2026 | multi | **About the Workshop** | CFP後 | なし | なし | medium |
| 2 | CVinW | CVPR 2024 | single | Overview | Schedule後(CFP前) | なし | なし | medium |
| 3 | AdvML | CVPR 2024 | single | Overview | Dates/Schedule後(CFP前) | なし | なし | medium |
| 4 | FMV(医療) | CVPR 2024 | single | **About** | Schedule後 | なし | (CFPなし) | medium |
| 5 | OpenDriveLab FMs | CVPR 2024 | single | Workshop(タイトル代替) | Schedule後 | **Diversity Statement** をフッター配置 | (CFPなし) | airy |
| 6 | NeXD25 | CVPR 2025 | single | Workshop Overview | (navのみ) | topicsに ethics 言及のみ | なし | medium |
| 7 | OpenSUN3D | ICCV 2025 | single | Introduction | Dates後(Papers前) | なし | なし | medium |
| 8 | AdvML | CVPR 2025 | single | Overview | Dates/Schedule後(CFP前) | なし | なし | medium |
| 9 | DataCV | ICCV 2025 | multi(Google Sites) | Overview | (別ページ) | なし | なし | medium |
| 10 | SynData4CV | CVPR 2024 | single | Overview | **Overview直後(2番目)** | topicsに ethics 言及のみ | なし | medium |
| 11 | ILR | ECCV 2024 | single | (見出しなし) | Schedule後(CFP前) | 一部でトピック除外に社会的影響言及 | なし | medium |
| 12 | FOCUS | ECCV 2024 | multi | (見出しなし) | **タイトル直後(2番目)** | topicsに ethics 言及のみ | なし | medium |
| 13 | Multimodal Agents | ECCV 2024 | single | (見出しなし) | CFP/Dates後 | なし | なし | medium |
| 14 | UNCV | ECCV 2024 | single | (見出しなし) | **見出しなし直後(2番目)** | なし | なし | medium |
| 15 | GreenFOMO | ECCV 2024 | single | Introduction | **Introduction直後(2番目)** | なし | (要確認) | medium |

### 集計

- **単一ページ vs 複数ページ**: 単一 12/15 (~80%) vs 複数 3/15 (~20%)
- **冒頭見出しの命名**:
  - "About" 系: 2/15
  - "Overview" / "Introduction" 系: 8/15
  - 見出しなし: 5/15
- **Speakers の位置**:
  - Intro直後(2番目)に配置: 5/15 — うち **4つがECCV 2024** (FOCUS / UNCV / GreenFOMO / ILRは3番目)、+ SynData4CV
  - CFP/Dates/Schedule後: 8/15
  - navのみ(本文なし): 2/15
- **Broader Impact / Ethics / Diversity セクション**:
  - トップレベル h2 セクションとして存在: **0/15**
  - フッター/末尾配置: 1/15(OpenDriveLab "Diversity Statement")
  - CFPトピックの一つとして言及: 4/15
- **CFP対面必須明記**: **0/15**(逆に Multimodal Agents は Zoom リンクを提供)
- **密度**: airy 1 / medium 13 / dense 0(※現FOUNDは medium+ の判定)

---

## 4. 指摘ごとの妥当性評価

### 指摘A(+コピー先の指摘B): ECCV参加者限定であることを明記

- **慣習性**: **0/15** の実例が明記していない。CV系ワークショップの CFP に "must attend in person" を書く慣習は**確認されなかった**。
- **ただし文脈上の妥当性**: FOUND は Springer proceedings 発行の full paper ではなく、**posterセッション限定**の応募で、かつ ECCV 2026 は in-person 開催。応募者を混乱させないための実務的配慮としては筋が通る。他会議の慣習が「書かないこと」なのは、CFPの前提として「発表者は現地参加する」ことが自明だからと解釈できる。
- **判定**: **採用推奨(コンテキスト上妥当)**。ただし慣習に沿うなら、目立つ強調ではなく、Nomination Guidelines の中に1行 "Nominators must register for and attend ECCV 2026 in person to present their poster." 程度で十分。Latest News セクションに同文を重ねて書くのは冗長。
- **推奨度**: ★★★☆☆(採用するが、控えめに1箇所か2箇所)

---

### 指摘B: 「About the workshop」見出しを削除し、本文をImportant Datesの上に移動

**2つの部分に分けて評価する必要がある**:

#### B-1: 見出し削除
- **慣習性**: 15例中、冒頭見出しを完全に持たないのは 5/15(1/3)。**残り 10/15 (2/3) は何らかの見出し**を持っている。ただし "About" という語を使うのは 2/15 のみで、多数派は "Overview" (7例)または "Introduction" (2例)。
- **判定**: 完全削除は少数派。**「About the Workshop」を「Overview」または「Introduction」にリネーム**するほうが慣習に忠実。または、h2レベルを下げてh3に落とし込む折衷案もあり得る。
- **推奨度**: ★★☆☆☆(完全削除は行きすぎ、リネーム/レベル調整に留めるのが妥当)

#### B-2: Description + Topics を Important Dates の上に移動
- **慣習性**: 現状は Hero → Dates → About。しかし ECCV 2024の同ジャンル(FOCUS / UNCV / GreenFOMO)は **Description → Speakers → CFP → Dates** の順が多い。**Dates を Description より前に置くのは少数派**(AdvML CVPR 2024/2025のみ2/15)。
- **判定**: **移動は妥当**。Dates の前に Description を持ってくるのが慣習に沿う。
- **推奨度**: ★★★★☆(採用推奨)

---

### 指摘C: Broader Impact をフッター化

- **慣習性**: **15例中 0例が Broader Impact を独立トップレベルセクションとして持っていない**。唯一 OpenDriveLab がフッター位置に "Diversity Statement" を配置(組織委員会情報の直前)。多くの CV workshop は Broader Impact をproposal文書に留め、公開サイトには載せない。
- **判定**: **強く妥当**。現在のFOUNDは glass-card + h3見出し + 100語超の本文で "About" セクション内に埋め込まれており、慣習と乖離。ページの視覚的重量を下げる観点でも有効。
- **選択肢**:
  1. 完全削除(慣習的にはこれが最多)
  2. フッター内に短縮版として配置
  3. 独立の `/ethics` や `/about` サブページに退避
- **推奨度**: ★★★★★(採用強く推奨)

---

### 指摘D: 現状は cluttered すぎる → 余白 or 別ページ分割

#### D-1: cluttered という判定そのもの
- **判定**: **妥当**。他ワークショップと比較して、以下のセクションが特に重い:
  - **Sponsorship セクション**(Intro / Benefits (3枚) / Why (3枚) / CTA の4ブロック) — 15例中これに匹敵する規模のSponsorshipセクションを持つ workshop は **0**。ほとんどは末尾にロゴ列があるだけ、あるいは Sponsors すら載せない。
  - **Broader Impact glass-card**(前述の通り 0/15)
  - **Info card + Latest News + Important Dates が上部3連続** — 「告知の壁」感が強い
- **推奨度(cluttered判定)**: ★★★★☆

#### D-2: 別HTMLページ分割の提案
- **慣習性**: 単一ページが 12/15 (80%) で圧倒的多数派。複数ページ分割は 3/15 (20%) の少数派で、主に Google Sites (DataCV) や MUSI のような多コンテンツ型に見られる。
- **判定**: 別ページ分割は**慣習からは外れる**。しかし FOUND の場合、Sponsorship や Broader Impact のような「常連情報ではない」コンテンツを別ページに切り出すのは、慣習を破る合理的理由(Sponsorship がそもそも特殊)がある。
- **代替案(推奨)**: **ページ分割の前に、まずセクション削減とサブブロックのコンパクト化**で cluttered を解決する。それでも詰まっていたら分割検討。
- **推奨度**: ★★☆☆☆(分割はまだ早い。密度を下げる別方策を優先)

---

### 指摘E: Description の後は Speakers → Nomination の順

- **慣習性**: **ECCV 2024ワークショップ4例(FOCUS / UNCV / GreenFOMO / ILR)** で、Speakers が Introduction/(見出しなし本文)直後に配置される順序を確認。SynData4CV (CVPR 2024) も同様。この順序は **ECCV系の主流パターン**と言える。
- 一方 CVPR系(CVinW / AdvML / NeXD25 / MUSI)では Schedule/CFP/Dates が先に来ることが多い — CVPR特有の傾向。
- **判定**: **ECCV会場で開催するなら特に妥当**。ECCV 2024ワークショップの実例と整合。
- **推奨度**: ★★★★☆(採用推奨、特にECCV開催なので)

---

## 5. 総合評価と推奨アクション

### 判定サマリ

| 指摘 | 判定 | 推奨度 |
|------|------|--------|
| A. ECCV参加者限定明記 | 慣習外だが実務上妥当 | ★★★☆☆ 採用(控えめに) |
| B-1. About見出し削除 | 完全削除はやり過ぎ | ★★☆☆☆ リネーム/レベル調整に留める |
| B-2. Description → Dates 順 | 慣習に沿う | ★★★★☆ 採用 |
| C. Broader Impact をフッター化 | 極めて妥当 | ★★★★★ 強く採用 |
| D-1. cluttered 判定 | 妥当 | ★★★★☆ 密度削減が必要 |
| D-2. 別ページ分割 | 慣習外 | ★★☆☆☆ 保留、他策優先 |
| E. Speakers → Nomination 順 | ECCV慣習に沿う | ★★★★☆ 採用 |

### 推奨する新セクション順序(慣習準拠)

```
1. Hero (現状維持)
2. Overview (旧: About the Workshop、リネーム + Broader Impact を除去 + Topics を独立化)
   - サブ: Topics of Interest
3. Invited Speakers  ← 前倒し
4. Call for Poster Nominations  ← 前倒し
   - 応募条件に "must attend ECCV 2026 in person" を1行追加
5. Important Dates  ← 後退
6. Latest News  ← Datesの近くに配置(告知の壁を分散)
7. Organizers
8. Sponsorship  ← コンパクト化(3ブロック → 1コンパクトカード + LIMIT joint note)
9. Contact
Footer:
   - Broader Impact(短縮版、または非表示) ← 移動
```

### 慣習外だが実施を推奨する追加改善

- **Sponsorship の圧縮**: 15例中 Sponsorship を本文セクションとして持つのはFOUNDだけ。LIMIT joint sponsorship のnoteは残しつつ、Benefits/Why/CTAは1つのカードにまとめて視覚的圧を下げる。
- **Info card の Latest News 統合**: 「ポスター募集告知」は Latest News の最新itemとして扱えば重複表示を避けられる。
- **Broader Impact の扱い**: 慣習に忠実なら完全削除 → OGP/SEOの記述には残す(検索エンジンから見えるようにする)

### 実施を推奨**しない**指摘

- **「About」見出しの完全削除** — "Overview" にリネームすれば十分。何らかの見出しを残すのが多数派。
- **別HTMLページへの分割** — 単一ページが 80% の慣習。他の密度削減策を先に。

---

## 6. 調査ソース

- [MUSI Workshop @ CVPR 2026](https://musi-workshop.github.io/)
- [Computer Vision in the Wild @ CVPR 2024](https://computer-vision-in-the-wild.github.io/cvpr-2024/)
- [AdvML @ CVPR 2024](https://cvpr24-advml.github.io/)
- [AdvML @ CVPR 2025](https://cvpr25-advml.github.io/)
- [Foundation Models for Medical Vision @ CVPR 2024](https://fmv-cvpr24workshop.github.io/)
- [OpenDriveLab FMs for Autonomous Systems @ CVPR 2024](https://opendrivelab.com/cvpr2024/workshop/)
- [NeXD25 @ CVPR 2025](https://sites.google.com/view/nexd25/home)
- [OpenSUN3D @ ICCV 2025](https://opensun3d.github.io/)
- [DataCV @ ICCV 2025](https://sites.google.com/view/datacv-iccv25)
- [SynData4CV @ CVPR 2024](https://syndata4cv.github.io/cvpr2024.html)
- [ILR @ ECCV 2024](https://ilr-workshop.github.io/ECCVW2024/)
- [FOCUS @ ECCV 2024](https://focus-workshop.github.io/)
- [Multimodal Agents @ ECCV 2024](https://multimodalagents.github.io/)
- [UNCV @ ECCV 2024](https://uncertainty-cv.github.io/2024/)
- [GreenFOMO @ ECCV 2024](https://green-fomo.github.io/ECCV2024/)

---

## 補足: SPAワークショップサイトの取り扱い

FOUND ICCV 2025 (前身)と LIMIT ECCV 2026 (姉妹) は同じ React Router SPA テンプレートで構築されており、WebFetch では JavaScript レンダリング前の空HTMLしか取得できなかった。これらは調査対象から除外。ただし、両者とも同じ limitlab.xyz テンプレートを使っているため、構造は FOUND ECCV 2026 (現状) と近いと推定される。**逆に言えば、他会議の CV ワークショップとの構造の乖離は、この限定的なテンプレート系列内で生じている可能性**があり、今回の指摘は「テンプレートを慣習寄りに軌道修正する」提案と位置付けられる。
