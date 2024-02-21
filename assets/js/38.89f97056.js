(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{353:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"builder-的机遇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builder-的机遇"}},[t._v("#")]),t._v(" Builder 的机遇")]),t._v(" "),a("p",[t._v("在撰写本报告的过程中，我们从社区收到了许多关于AI x Crypto领域潜在构建者的建议。我们整理了一份建议清单，列出了我们感兴趣的想法，希望能帮助您开始工作。我们列出了每个问题和潜在的解决方案。如果您对这些想法感兴趣， 请联系我们"),a("a",{attrs:{href:"mailto:support@bewater.xyz"}},[t._v("support@bewater.xyz")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_4-1-建议想法精选清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-建议想法精选清单"}},[t._v("#")]),t._v(" 4.1 建议想法精选清单")]),t._v(" "),a("h3",{attrs:{id:"_4-1-1-人工智能dao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-人工智能dao"}},[t._v("#")]),t._v(" 4.1.1 人工智能DAO")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" DAO依赖活跃的社区对提案进行深思熟虑的投票。每项提案都需要手动投票，这会拖慢工作进度，导致"),a("a",{attrs:{href:"https://blog.tally.xyz/dao-fatigue-7ebe58549a8f",target:"_blank",rel:"noopener noreferrer"}},[t._v("DAO疲劳"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(" 为DAO的成员提供一个人工智能代理，根据他们的价值观代表他们投票，从而实现提案自动化。该模型可以使用贝叶斯方法，将决策中的不确定性考虑在内。如果不确定性超过阈值，则提请DAO成员注意该提案，并要求进行人工投票。")]),t._v(" "),a("p",[t._v("创建这些人工智能代理的参与的流程需要简化，以便用户采用。结合每个用户的链上和链下数据，就可以定义用户的偏好，而无需过多的人工操作。例如，"),a("a",{attrs:{href:"https://www.daobase.ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DAO Base"),a("OutboundLink")],1),t._v('正在围绕 "你过去的所作所为决定了你"这一理念研究解决方案。')]),t._v(" "),a("p",[t._v("一种可能的方法是在链上查询LLM，将提议和DAO成员的提示词一起传入，以便他们根据自己的要求进行调整。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pragma solidity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncontract Example "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string memory proposal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" pure "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    string memory result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("llmInference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string memory v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string memory reason "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("For"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Against"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Abstain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unknown vote: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" with reason: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("center",[t._v("清单 1：这是一个简单的示例，但需要一个工具来方便用户指定他们的要求，并使投票自动化")]),t._v(" "),a("h3",{attrs:{id:"_4-1-2-可验证的训练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-可验证的训练"}},[t._v("#")]),t._v(" 4.1.2 可验证的训练")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" ：由于训练模型是对训练数据的压缩，因此即使能获得模型权重，也不一定能知道模型是在什么数据上训练的。这就带来了一些传统软件所不存在的挑战：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.theverge.com/2023/11/4/23946353/generative-ai-copyright-training-data-openai-microsoft-google-meta-stabilityai",target:"_blank",rel:"noopener noreferrer"}},[t._v("使版权问题复杂化"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("更难公平地补偿数据所有者")]),t._v(" "),a("li",[t._v("在训练由多方完成的情况下，如模型"),a("a",{attrs:{href:"https://modelzoo.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zoo"),a("OutboundLink")],1),t._v("，很难知道谁训练了模型的每个部分")]),t._v(" "),a("li",[t._v("更容易在模型中增添偏差")])]),t._v(" "),a("p",[a("strong",[t._v("潜在的解决方案：")]),t._v(" 使训练过程本身可验证。开发工具来分解模型是如何训练的，并检查它是否包含给定的数据。可以探索几种方法：")]),t._v(" "),a("p",[t._v("将加密原语集成到训练过程本身。例如，"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=9KcuwjUOm4s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pytorch NFT Callback"),a("OutboundLink")],1),t._v("会每隔N个epoch对当前网络权重、一些元数据（数据、准确性等）和你的以太坊地址进行哈希运算，从而证明是谁进行了模型训练。注意：这种方法会给模型训练带来性能开销。")]),t._v(" "),a("p",[t._v("另一种解决方案是在专门构建的去中心化网络上训练模型。也有基于传统共识机制（如BFT）的解决方案。")]),t._v(" "),a("p",[t._v("然而，BFT需要的不仅仅是2/3节点的可靠性诚实性.达成BFT 共识的最少节点数是𝑁 = 3𝑓 + 1，其中 𝑓 给出了 (i) 失败或 (ii) 作恶的节点数。这就引入了大量冗余工作（与𝑁成线性关系，例如𝑁 = 60时为60x）。这种方法的一个例子就是"),a("a",{attrs:{href:"https://arxiv.org/pdf/2307.07066.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v('"训练证明"'),a("OutboundLink")],1),t._v("。我们建议采用另一种从头开始构建的、专为模型训练的去中心化网络。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-3-实现可验证推理的其他途径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-实现可验证推理的其他途径"}},[t._v("#")]),t._v(" 4.1.3 实现可验证推理的其他途径")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" 可验证的ML研究大多集中在零知识机器学习（zkml）上。然而，zkml目前的性能开销高达1000倍，而且还不能运行大型模型。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(" 目前正在探索几种方法。这是一个相对较新的领域，不同的方法有机会做出不同的权衡。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.hyperoracle.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ora"),a("OutboundLink")],1),t._v("正在尝试使用"),a("a",{attrs:{href:"https://mirror.xyz/orablog.eth/zMRqj-qMzOU9GhyNCE8BYZLuD_rmAp5LVPhpg7pwbvE",target:"_blank",rel:"noopener noreferrer"}},[t._v("opML"),a("OutboundLink")],1),t._v('。这种方法是由单方 "乐观地 "推断模型，将结果放到链上，并通过向验证者支付代币来激励他们质疑不正确的结果。')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://aizelnetwork.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aizel"),a("OutboundLink")],1),t._v("正在构建一个基于多方计算（MPC）和可信执行环境（TEE）的解决方案。他们的目标是以与普通推理相同的成本进行可验证推理。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ezkl.xyz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EZKL"),a("OutboundLink")],1),t._v("正在对zk证明进行拆分和并行化，这将使大型模型的证明变得可行。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-4-depin-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-depin-2-0"}},[t._v("#")]),t._v(" 4.1.4 DePin 2.0")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" 随着去中心化个人互联网（DePin，Decentralized Personal Internet）技术和机器人技术的交叉，整合机器人群等动态自主系统的独特挑战显而易见。与太阳能电池板等静态传感设备不同，机器人群具有独立行动的能力，这就带来了脆弱性。具体来说，机器人群中的一个故障或作恶（拜占庭式）机器人就会破坏整个系统的完整性。鉴于机器人行动的不可逆转性，确保这些机器人群的可靠性和安全性至关重要。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(" 一种潜在的解决方案是利用零知识证明（ZKPs）来认证特定群体策略的执行，而不泄露策略的细节。这种加密技术可以根据从群体收集到的硬件认证数据和外部传感器的加密签名信息，验证群体是否按照预先定义的算法运行。通过加入 ZKPs，我们可以建立一个可实时验证机器人群行为的无信任环境，从而降低拜占庭机器人带来的风险。这种方法不仅增强了机器人群的安全性和可靠性，还符合DePin的去中心化理念，在确保透明度和信任度的同时，不会泄露敏感的操作细节。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-5-透明的llm-drift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-5-透明的llm-drift"}},[t._v("#")]),t._v(" 4.1.5 透明的LLM Drift")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" 大型语言模型（LLM）是许多应用的核心，但它们却存在不可预知性和性能随时间变化而下降的问题。传统的基准（如HuggingFace的Open LLM "),a("a",{attrs:{href:"https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leaderboard"),a("OutboundLink")],1),t._v("）因其游戏性和缺乏历史数据而备受诟病，因此很难跟踪和了解 LLM 的性能变化。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(" 将自动基准与社区投票相结合，使用代币作为参与的激励措施。结果存储在区块链上，确保透明度和不变性。这种方法旨在提供可靠、透明的LLM性能历史，解决不可预测性和性能下降的问题。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-6-真相市场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-6-真相市场"}},[t._v("#")]),t._v(" 4.1.6 真相市场")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" 随着人工智能生成的内容越来越普遍，区分网上信息的真假变得越来越复杂。这种模糊性对传统的验证方法提出了挑战，使数字内容难以保持可信度。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(' 一个值得考虑的想法是扩展证明市场的概念，以解决在更细微、更模糊的环境中验证真理的问题。通过引入经济激励机制（如现有证明市场中的激励机制），该系统可以鼓励发现和验证真理。Bittensor 的 "尤马共识 "将是 "真相市场 "的理想场所，因为它能很好地处理模糊性问题。这种方法不会规定特定的方法，但会创建一个框架，在这个框架中，各种识别真理的策略都会得到经济上的激励，从而形成一个真理具有实际价值的生态系统。')]),t._v(" "),a("h3",{attrs:{id:"_4-1-7-工智能解决了预测市场不可信问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-7-工智能解决了预测市场不可信问题"}},[t._v("#")]),t._v(" 4.1.7 工智能解决了预测市场不可信问题")]),t._v(" "),a("p",[a("strong",[t._v("问题：")]),t._v(" 预测市场面临的挑战是，参与者往往对所投注事件的含义存在分歧，包括什么算作输赢的证据，从而导致混乱和争议。")]),t._v(" "),a("p",[a("strong",[t._v("潜在解决方案：")]),t._v(' 在事先商定的日期将信息输入事先商定的人工智能模型，从而解决预测市场问题。信息来自预先商定的数据源（可利用之前的 "真相市场 "想法）。')])],1)}),[],!1,null,null,null);a.default=r.exports}}]);