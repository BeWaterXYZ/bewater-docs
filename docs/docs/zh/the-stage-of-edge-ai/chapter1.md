# **第一章：边缘 AI 的需求**

# 1\. 引言

## 1.1. 人工智能的兴起

人工智能（AI）已经迅速从一个理论概念转变为一种广泛渗透于现代生活各个层面的实用技术。这一演变主要得益于机器学习算法的进步、算力的提高以及大型数据集的可用性。当前，人工智能技术在解决复杂问题方面发挥着重要作用，推动了多个行业实现突破性进展。

### 1.1.1. 人工智能应用的突破

人工智能在多个领域取得了显著成果：

* **医疗**：深度学习模型有助于早期疾病检测、个性化治疗方案制定以及药物研发。例如，人工智能算法已被开发用于从视网膜图像中检测糖尿病视网膜病变，精度极高，有望通过早期干预预防失明 \[1\]。
* **交通运输**：自动驾驶汽车利用人工智能进行导航、障碍物检测和决策过程。特斯拉和 Waymo 等公司已使用机器学习算法实时解读传感器数据，提升道路安全和效率 \[2\]。
* **软件开发**：人工智能工具通过自动完成代码、检测漏洞和优化代码来提高开发人员的生产力。由 OpenAI 的 Codex 驱动的 GitHub 的 Copilot 能够根据上下文建议代码片段和函数，从而简化了开发过程 \[3\]。
* **艺术**：生成式人工智能能够进行原创音乐、艺术和文学的创作。像 OpenAI 的 DALL·E 这样的项目能够根据文本描述生成图像，突破创造力的界限，扩展了机器在艺术表达中的角色\[4\]。

这些突破展示了人工智能的变革潜力，实现了以往难以达成的创新。

### 1.1.2. 大语言模型（LLMs）的兴起

人工智能的一个重要里程碑是大语言模型（LLMs）的发展，例如 OpenAI 的 GPT-3 和 GPT-4。这些模型通过大量文本数据进行训练，能够理解上下文、生成类似人类语言逻辑的文本，并执行各种语言任务 \[5\]。

大语言模型彻底改变了自然语言处理领域，具体表现为：

* **提升对话代理**：大语言模型支持复杂的聊天机器人，使其能够进行连贯且具有上下文感知的对话，从而改善客户服务和用户体验。
* **协助代码生成**：像 Codex 这样的模型可以将自然语言描述转化为功能性代码，有助于软件开发和学习\[3\]。
* **实现高级翻译和摘要生成**：大语言模型提供高质量的翻译和简洁的摘要，有效打破语言障碍并高效提炼信息。

然而，这些发展也伴随着挑战。随着模型规模和复杂性的增加，它们需要更多的计算资源和专用硬件，从而导致了延迟和能耗的增加。例如，GPT-3.5 的平均响应时间为每个 token 35 毫秒，而更先进的 GPT-4 每个 token 的响应时间为 94 毫秒 \[5\]。这种延迟可能阻碍实时应用，对用户体验产生负面影响。

此外，人工智能模型的增长速度已经超越了摩尔定律所描述的硬件能力提升速度，导致人工智能需求与计算资源供应之间的差距不断扩大\[6\]。由于硬件加速的局限性以及能够运行大型模型的设备范围有限，对软件优化的需求变得迫在眉睫。像边缘人工智能这样创新的方法，即靠近数据源处理任务以减少延迟、增强隐私并优化资源利用，变得越来越重要。此外，模型蒸馏等技术通过减小模型规模，使其能在较小设备上运行，代表了人工智能发展的下一步。

*人工智能模型规模的增长超过了图形处理器（GPU）内存的增长 \[6\].*

## 1.2. 部署传统人工智能的挑战

随着人工智能模型不断趋于复杂，其在部署和可扩展性方面面临着巨大的挑战。传统的人工智能部署，尤其是依赖云基础设施的部署，越来越难以应对现代人工智能应用的需求。

### 1.2.1. 计算资源需求

人工智能能力的提升与模型规模和复杂性的指数增长密切相关。像 GPT-3 和 GPT-4 这样的大语言模型（LLMs）拥有数十亿个参数，无论是训练还是推理都需要巨大的计算资源 \[7\]。训练这些模型需要专门的硬件，例如图形处理单元（GPUs）和张量处理单元（TPUs），这些设备价格昂贵且消耗大量能源 \[8\]。

此外，将这些模型部署用于实时应用中带来了额外的挑战。推理——即使用训练好的模型进行预测——可能非常耗费资源。例如，在生产环境中运行 GPT-3 需要大量的内存和处理能力才能达到可接受的延迟水平 \[9\]。这种高资源需求限制了只有具备强大基础设施的组织才能负担得起先进的人工智能技术。

计算强度还带来了环境方面的影响。用于人工智能计算的数据中心消耗大量电力，导致了碳排放。一项研究指出，训练一个人工智能模型产生的碳排放相当于五辆汽车在其生命周期内的排放量 \[10\]。

### 1.2.2. 超越摩尔定律的差距日益扩大

摩尔定律指出，微芯片上的晶体管数量大约每两年翻一番，在历史上曾对计算能力的指数增长做出了预测 \[11\]。然而，人工智能模型的增长速度已经超越了硬件改进的步伐，导致计算需求与供给之间的差距不断扩大 \[12\]。

近年来，人工智能模型的规模在几年内呈数量级增长。例如，最先进的语言模型参数量已经从数百万增加到数千亿 \[13\]。这种迅猛的扩张超过了硬件能力的提升幅度，造成了人工智能发展的瓶颈。

这种差距需要一种协同设计策略，即硬件和软件同时进行优化，以满足不断增长的需求 \[14\]。如果没有创新的方法来弥合这一差距，人工智能技术的发展可能会因物理和经济方面的限制而受到阻碍。

日益增长的计算需求还对延迟和用户体验产生了影响。高复杂度的模型可能导致响应时间变慢，这对于需要实时交互的应用程序是不利的 \[9\]。用户对延迟极为敏感，研究显示，即使响应时间仅增加一秒，也可能导致用户参与度大幅下降 \[15\]。

除了延迟和用户体验外，当前的人工智能模型也存在局限性，无法为用户提供根据个体需求优化或调整模型的灵活性。此外，这些模型无法在个人设备上自由运行，必须依赖于数据中心，成为一种“一刀切”的解决方案。

这些问题凸显了其他部署策略的必要性，例如边缘人工智能。边缘人工智能旨在通过优化模型和硬件，靠近数据源处理数据，从而减少延迟并降低资源消耗。

# 2\. 云端人工智能的局限性

基于云的人工智能服务在提升先进人工智能能力的可及性方面发挥了关键作用。然而，它们存在一些局限性，可能会阻碍其在某些应用中的有效性。这些局限性主要包括延迟问题、隐私担忧、带宽以及成本因素。

## 2.1. 延迟问题

延迟，即用户操作与系统响应之间的时间差，是人工智能应用性能的关键因素。高延迟会降低用户体验，并限制人工智能在时间敏感场景中的应用。

### 2.1.1. 云端人工智能服务的响应时间

#### 2.1.1.1. GPT-3.5 和 GPT-4 的延迟

像 GPT-3.5 和 GPT-4 这样的大语言模型（LLMs）由于其庞大的参数规模（GPT-3 有 1750 亿个参数，GPT-4 的参数更多）\[16\]，需要大量的计算资源。在云端运行这些模型不仅会引入计算延迟，还会因数据传输导致网络延迟。

例如，GPT-3.5 每个 token 的平均响应时间约为 35 毫秒，而更先进的 GPT-4 平均为 94 毫秒 \[17\]。在生成较长响应时，这些响应时间会显著累积，导致明显的延迟，从而阻碍实时应用的表现。

#### 2.1.1.2. 对用户体验的影响

高延迟对用户体验产生不利影响，尤其是在响应速度至关重要的交互应用中。用户在大约 100 毫秒时开始察觉到延迟，而超过 1 秒的延迟会破坏交互的流畅性 \[18\]。在聊天机器人或虚拟助手等对话式人工智能应用中，延迟会使交互感觉迟缓且不自然，降低用户的参与度和满意度。

此外，在紧急响应系统或金融交易平台等应用中，延迟可能带来重大后果，可能导致损失或安全风险。

### 2.1.2. 实时应用的限制

#### 2.1.2.1. 案例分析：从 Google Assistant 到 Meta 的实时翻译

Google Assistant 在很大程度上依赖于云端处理语音识别和自然语言理解，这导致了因数据传输和远程计算而产生的延迟 \[19\]。为了提升响应速度，Google 通过在用户设备上部署压缩版神经网络，将处理转移到本地设备上。

这一转变将延迟从数百毫秒减少到 500 毫秒以下，显著提升了用户体验 \[19\]。通过本地处理语音命令，Google Assistant 可以更快地响应，使交互更加流畅和自然。

苹果通过在设备上处理某些任务，大幅提升了 Siri 的响应速度。这一转变不仅加快了响应时间，还通过将部分用户数据保留在本地，增强了隐私保护。\[851\]

英伟达开发了深度学习超级采样（DLSS）技术，该技术利用人工智能实时提升图形质量的技术，在不牺牲视觉质量的情况下提高了游戏性能。\[852\]

特斯拉的自动驾驶技术需要对大量传感器数据进行实时处理。他们开发了定制的人工智能芯片来在车载系统中处理这些数据，减少了其自动驾驶功能在决策过程中的延迟。\[853\]

Meta 正在其消息平台上开发实时翻译功能，这需要低延迟的自然语言处理，以实现跨语言的无缝通信。\[854\]

#### 2.1.2.2. 用户对延迟的敏感性

用户对交互系统中的延迟非常敏感。研究表明，即使是极小的延迟也会影响用户的满意度和表现。根据 Nielsen 的研究 \[18\]，超过 1 秒的延迟会打断用户的思维过程，而超过 10 秒的延迟会使用户完全放弃任务。

在在线游戏、虚拟现实或自动驾驶等应用中，延迟不仅仅是个不便的问题，更是影响功能性和安全的关键因素 \[20\]。因此，减少延迟对于人工智能技术在实时应用中的有效性和推广至关重要。

## 2.2  模型可转移性的限制

人工智能模型的 可转移性是一个重要问题，特别是对于那些需要灵活性、定制化或在多样硬件上部署的应用。许多先进的人工智能模型通常托管在集中式数据中心，这限制了终端用户访问、定制或优化它们以满足特定需求的能力。这种局限性给在不同环境中部署人工智能解决方案带来了挑战。

### 2.2.1. 硬件限制与可访问性

大多数最先进的人工智能模型规模庞大且资源密集，通常需要强大的计算能力，例如图形处理单元（GPU）或张量处理单元（TPU）才能高效运行。这意味着这些模型往往无法被拥有普通硬件的用户或小型设备（如智能手机或物联网设备）访问。因此，许多人工智能解决方案只能依赖云基础设施，在云连接不可靠或不实用的情况下，限制了它们在实时或离线场景中的应用。这种对高端硬件的依赖阻碍了人工智能在各个领域的广泛采用，尤其是在需要低延迟、本地处理的应用中。

### 2.2.2. 定制化和微调能力的缺失

人工智能模型的中心化特性往往导致一种“一刀切”的解决方案，定制化机会非常有限。终端用户通常对模型参数几乎没有控制权，无法根据其独特的需求或应用场景对模型进行调整。例如，一家金融机构可能希望微调模型以检测其所在地区市场特有的欺诈模式。由于中心化模型无法适应这些独特的、区域化的交易行为，该机构可能会在欺诈检测方面效果不佳，导致更多误报或漏报的欺诈行为，因此需要一个完全不同的、量身定制的解决方案。

### 2.2.3. 对云基础设施的依赖

依赖云基础设施运行和访问人工智能模型在延迟、连接性和运营成本方面带来了重大挑战。在互联网连接不佳的环境中，或在需要即时、实时响应的应用（如自动驾驶汽车或机器人）中，依赖集中化的云模型会引入可能具有不利影响的延迟。此外，频繁地与云进行数据传输可能成本高昂，使得一些用户或组织难以维持对这些模型的持续访问。

### 2.2.4. 法规和数据主权问题

通过中心化数据中心部署人工智能模型还可能引发监管问题，尤其是在不同司法管辖区运营且数据主权法律各不相同的情况下。在某些情况下，数据必须保留在特定的地理区域内或在本地设备上进行处理，而模型可转移性的缺乏使得合规变得困难。对于在金融或医疗保健等具有严格监管要求的部门运营的组织来说，这种限制可能会阻碍人工智能技术的采用。

通过解决这些问题，诸如模型蒸馏、边缘人工智能和联邦学习等解决方案提供了增强模型可转移性的途径，，使得人工智能能够在更广泛的设备和环境中实现更具适应性和高效的应用。

## 2.3. 隐私问题

在人工智能应用中，隐私是一个至关重要的问题，尤其是在处理敏感用户数据时。基于云的人工智能服务通常需要在远程服务器上传输和存储个人数据，这引发了多项隐私问题。

### 2.3.1. 数据泄露风险

将数据存储在云中会使其面临潜在的网络攻击和数据泄露风险。过往事件已表明，即使是安全性较高的云服务也存在漏洞。例如，2019 年 Capital One 数据泄露事件因防火墙配置错误，影响了超过 1 亿用户 \[21\]。

数据泄露可能导致未经授权访问敏感信息，包括个人身份信息、财务细节和私人通信。在人工智能应用中，这可能意味着虚拟助手的机密信息或由人工智能服务处理的敏感个人数据被暴露。

### 2.3.2. 不透明的数据政策与用户信任

云人工智能提供商通常拥有复杂且不透明的数据政策，用户可能无法完全理解。这种透明度的缺乏可能削弱用户的信任 \[22\]。用户可能不清楚他们的数据是如何被收集、使用或与第三方共享的。此外，一些人工智能服务可能在没有明确用户同意的情况下使用个人数据来改进其模型。

信任对于人工智能技术的广泛应用至关重要。如果用户对他们的数据如何被处理感到不确定，特别是涉及敏感信息的应用，他们可能会对使用基于云的人工智能服务持保留态度。

### 2.3.3. 法规合规性（如 GDPR）

像欧盟的《通用数据保护条例》（GDPR）这样的法规对数据隐私和保护提出了严格要求 \[23\]。《通用数据保护条例》规定个人数据必须合法、透明地处理，并用于特定的合法目的。

基于云的人工智能服务必须应对复杂的监管环境，确保在不同司法管辖区内合规。不合规可能会导致严厉的处罚，包括最高达全球年营业额的 4% 或 2000 万欧元的罚款，以较高者为准 \[23\]。

此外，GDPR 赋予个人对其数据的权利，例如访问、更正和删除个人信息的权利。在云环境中实施这些权利可能具有挑战性，尤其是当数据分布在多个服务器和地点时。

## 2.4. 带宽成本

对人工智能服务的云基础设施的依赖会产生大量的带宽使用和相关成本，这对服务提供商和用户都将产生影响。

### 2.4.1. 高数据传输成本

将大量数据传输到云服务器并从中取回会消耗大量带宽，导致高昂的运营成本 \[24\]。视频分析、自动驾驶汽车和物联网（IoT）设备等应用会生成大量需要处理的数据流。

例如，自动驾驶汽车每天可产生高达 4TB 的数据 \[25\]。将如此大规模的数据传输到云端进行处理不仅不切实际，而且成本过高。高昂的数据传输成本会限制基于云的人工智能解决方案的可扩展性。

### 2.4.2. 基础设施扩展成本

随着用户数量的增加，基于云的人工智能服务面临可扩展性挑战。需求的增长需要按比例扩展云基础设施，包括服务器、存储和网络能力 \[26\]。扩展基础设施需要大量资本投入，并且可能由于网络拥塞而引入额外的延迟。

此外，服务提供商可能会将这些增加的成本转嫁给用户，这有可能使得人工智能服务变得难以负担得起。在网络基础设施有限的地区，带宽限制可能进一步阻碍可扩展性和可访问性。

### 2.4.3. 数据中心的环境影响

数据中心消耗大量能源，引发了环境问题 \[27\]。全球数据中心的能源消耗约占世界用电量的 1%，且预测显示这一趋势还在上升 \[28\]。

人工智能计算的高能耗性质，特别是在训练和运行大型模型时，加剧了环境问题。这引发了可持续发展方面的问题，并对公司采用更环保的做法施加了压力，而这些措施往往成本高昂。

此外，环境影响可能会影响公众认知和监管政策，进而对基于云的人工智能服务的运营产生潜在影响。

# 3\. 边缘人工智能：将智能推向更近

## 3.1. 边缘人工智能的定义与概述

边缘人工智能（Edge AI）是指将人工智能算法和模型直接部署到一系列远离集中式云而分布在网络边缘的计算资源上，例如智能手机、物联网设备和嵌入式系统。通过在本地处理数据，边缘人工智能能够实现实时分析和决策，减少对云基础设施的依赖 \[29\]。

### 3.1.1. 与云计算的对比

在传统云计算中，终端设备生成的数据通过互联网传输到集中式服务器进行处理和分析。这种方法存在局限性，包括由于网络传输时间导致的延迟、数据暴露带来的潜在隐私风险以及对稳定互联网连接的依赖 \[30\]。

边缘人工智能通过在数据源处或附近进行计算来解决这些问题。这减少了需要发送到云的数据量，降低了延迟和带宽使用，同时增强了隐私和安全性。虽然云计算提供可扩展的资源和中心化管理，但边缘人工智能提供更快的响应时间和本地化智能 \[31\]。

### 3.1.2. 边缘计算的演进

随着硬件小型化、边缘设备计算能力的提升以及对实时数据处理需求的增加，边缘计算得到了发展 \[32\]。物联网设备的大量普及产生了海量数据，这促使计算从集中式处理向分布式架构转变。

诸如专用边缘处理器和高效人工智能算法等技术创新使得在资源受限的设备上能够进行复杂的计算。这种演进是由需要低延迟的应用驱动的，例如自动驾驶汽车、智能制造和实时健康监测 \[33\]。

## 3.2. 边缘人工智能的优势

与传统的基于云的人工智能部署相比，边缘人工智能具有多个优势，解决了与延迟、隐私、带宽、个性化和可靠性相关的关键挑战。

### 3.2.1. 降低延迟和更快的响应时间

通过本地处理数据，边缘人工智能显著减少了数据往返中央服务器的时间，从而降低了延迟 \[34\]。这对于需要即时响应的应用尤为重要，例如自动驾驶，延迟可能带来严重的安全问题。

例如，在自动驾驶汽车中，决策过程需要在毫秒内完成，以对动态驾驶条件做出适当反应 \[35\]。边缘人工智能使得数据分析和行动快速进行，无需依赖云端通信带来的延迟。

### 3.2.2. 提高模型的可转移性与部署效率

诸如模型蒸馏、量化和边缘人工智能等技术通过减小人工智能模型的尺寸和计算需求，显著提高了模型的可转移性，使其能够在较小的设备上高效运行 \[38\]。这种方法允许用户在从智能手机到物联网设备的更广泛的硬件范围内部署人工智能模型，而无需依赖中心化数据中心。通过使模型更加轻量化和适应性强，这些技术有助于定制和微调以满足特定应用需求，使组织能够根据其独特需求定制人工智能解决方案。提高的可转移性不仅拓宽了人工智能的可访问性，还减少了对云基础设施的依赖，从而降低了延迟、提高了响应速度并减少了运营成本。

### 3.2.3. 增强隐私性与数据安全

边缘人工智能通过将敏感数据保留在本地设备上，而不是通过网络传输到云服务器，增强了隐私保护，从而避免了数据可能被拦截或泄露的风险 \[36\]。这对处理个人或机密信息的应用尤为重要，例如健康数据或金融交易。

在本地处理数据也符合《通用数据保护条例》（GDPR）等数据保护法规，这些法规强调用户同意和数据最小化 \[37\]。

### 3.2.4. 降低带宽使用量并节省成本

通过减少向云服务器传输大量数据的需求，边缘人工智能降低了带宽消耗 \[38\]。这为服务提供商和用户都带来了成本节约，尤其是在网络基础设施有限或数据传输成本高昂的场景中。

例如，生成连续数据流的物联网设备可以将处理任务卸载到边缘，最大限度地减少网络拥塞和相关费用 \[39\]。

### 3.2.5. 提升个性化体验和本地化处理

边缘人工智能通过利用保留在用户设备上的数据，能够提供更个性化的体验 \[40\]。应用程序可以根据用户的行为和偏好进行自适应，而无需牺牲隐私。

在虚拟助手的场景中，设备内处理使得助手能够从用户的交互和使用模式中学习，从而提供相关性更强的回应和建议 \[41\]。

### 3.2.6. 可靠性和离线能力

边缘人工智能通过减少对持续互联网连接的依赖来提高系统可靠性 \[42\]。即使在网络连接不稳定或不可用的情况下，应用程序也可以继续运行。

例如，在网络连接有限的偏远或农村地区，边缘人工智能使得诸如医疗诊断或农业监测等关键服务能够在不依赖云服务器的情况下有效运行 \[43\]。

## 3.3. 展示边缘人工智能优势的案例研究

### 3.3.1. 人脸识别系统

在边缘处实施人脸识别算法在性能和隐私方面显示出了显著的改进。基于边缘的人脸识别系统在本地处理图像，减少了延迟并消除了通过网络传输敏感生物识别数据的需求 \[44\]。

一项比较基于云和基于边缘的人脸识别的研究发现，边缘计算根据云服务的不同将响应时间减少了 2.5 倍到 4.5 倍 \[45\]。这种改进对于安全系统或移动身份验证等需要快速且安全验证的应用至关重要。

### 3.3.2. 物联网设备中的实时分析

配备边缘人工智能功能的物联网设备可以进行实时分析，无需依赖云即可进行即时决策 \[46\]。例如，工业传感器可以检测异常并立即触发预防措施，提高运营效率和安全性。

在智能家居中，具备边缘功能的设备能够根据实时的居住情况和使用模式调整环境控制，优化能耗并提升用户的舒适度 \[47\]。

### 3.3.3. 用于健康监测的可穿戴设备

可穿戴设备中的边缘人工智能正在彻底改变个人健康监测，通过对生命体征和活动模式进行实时分析。这种本地处理减少了延迟并增强了隐私，这对于处理敏感的健康数据至关重要。

例如，具备边缘功能的智能手表可以通过在设备上直接处理数据，提高心房颤动（AFib）检测的速度，而无需将数据发送到数据中心进行分析。通过将敏感的健康数据保留在设备上，边缘计算提升了用户隐私和数据安全性。

另一个应用是在糖尿病患者的连续血糖监测中。具备边缘功能的设备可以更频繁地进行监测或持续干预，而无需依赖持续的云连接。

### 3.3.4. 自动驾驶车辆和无人机

边缘计算通过实现实时决策极大地增强了自动驾驶汽车和无人机的能力，这对于导航和安全至关重要。通过在本地处理数据，边缘计算消除了将数据发送到云服务器并接收指令所带来的延迟。这种实时处理在城市环境中尤为关键，因为城市环境变化迅速，需要快速响应以避免碰撞。

在人口密集的城市地区，信号干扰和网络拥塞是常见的挑战。边缘处理确保无人机即使在云连接受限或中断的情况下也能安全运行。通过减少与云服务器进行持续高带宽通信的需求，边缘计算在这样的环境中变得更加可靠。这一优势对于包裹递送和搜索救援行动等应用特别有益。

边缘处理将环境的视觉信息等敏感数据保留在本地，最大限度地减少了与将数据传输至云端相关的隐私问题和安全风险。此外，它还可以使系统针对特定的城市环境进行微调，提高在本地障碍物导航中的性能。

减少对云通信的依赖还降低了功耗，可能延长飞行时间。在农业应用中，边缘人工智能实现了作物的实时分析和精准的农药施用，既减少了农药的使用，同时又保持了作物产量，带来了经济和环境上的双重优势。

# 4\. 推动边缘人工智能的技术进步

硬件和软件技术的进步在使边缘人工智能成为一种实用且高效的解决方案中起到了关键作用。专用硬件组件的创新、算法优化技术以及协同设计策略共同解决了在资源受限的边缘设备上部署人工智能模型的挑战。

## 4.1. 硬件创新

专业硬件的发展极大地增强了边缘设备的计算能力，使其能够高效地运行复杂的人工智能算法。

### 4.1.1. 专用边缘人工智能芯片（如边缘 TPU）

专为边缘人工智能计算而设计的专用芯片，如谷歌的边缘张量处理单元（Edge TPUs），已经彻底改变了边缘计算。边缘张量处理单元是针对运行深度学习模型（特别是卷积神经网络）进行优化的专用集成电路（ASICs）\[48\]。这些芯片具有高性能和低功耗的特点，使其成为边缘设备上实时推理的理想选择。

边缘张量处理单元通过高效地执行矩阵乘法和卷积运算来加速人工智能工作负载。它们被设计用于处理整数量化模型，这些模型比浮点模型更小、更快 \[49\]。通过将人工智能任务卸载到专用硬件上，边缘设备可以实现更高的吞吐量和更低的延迟。

### 4.1.2. 集成 NPU 的移动处理器

如今的移动处理器通常集成了神经处理单元（NPU），这些是专门加速机器学习任务的协处理器。苹果、华为和高通等公司开发了带有内置 NPU 的处理器，以增强设备的人工智能能力\[50\]。

例如，苹果的 A14 仿生芯片包含一个 16 核神经引擎，能够每秒执行 11 万亿次运算 \[51\]。类似地，华为的麒麟系列集成了支持混合精度计算的 NPUs，提高了性能和能效 \[52\]。这些 NPUs 使智能手机和平板电脑能够运行先进的人工智能应用，如实时图像处理和自然语言理解，而无需依赖云服务。

### 4.1.3. 高能效计算平台

对于电池供电的边缘设备来说，能效至关重要。能效计算平台的进步，如 ARM 的 big.LITTLE 架构和 NVIDIA 的 Jetson Nano，使边缘设备能够在最小化功耗的同时执行复杂的 AI 任务\[53\]。

big.LITTLE 架构将高性能核心与高能效核心相结合，允许设备根据工作负载需求平衡性能和功耗 \[54\]。NVIDIA 的 Jetson 平台提供了针对边缘人工智能推理进行优化的高能效 GPU，支持机器人技术、无人机和物联网设备中的应用 \[55\]。

## 4.2. 软件和算法优化

优化人工智能模型和软件框架对于克服边缘设备的计算和内存限制至关重要。

### 4.2.1. 高能效计算平台

模型压缩降低了人工智能模型的大小和复杂度，使其更适合在边缘设备上部署，而不会在准确性方面有显著损失。

#### 4.2.1.1. 量化

量化涉及降低表示模型参数和激活值的数值精度。通过将 32 位浮点数转换为低位数表示，如 8 位整数甚至 1 位，模型消耗更少的内存和计算资源 \[56\]。

量化后的模型不仅存储占用更小，而且在支持整数运算的硬件上受益于更快的计算速度 \[57\]。诸如训练后量化和量化感知训练等技术有助于在量化后保持模型准确性 \[58\]。

#### 4.2.1.2. 剪枝

剪枝从神经网络中移除冗余或不太重要的权重和神经元，有效地减少模型大小和计算需求 \[59\]。像权重剪枝这样的技术会消除对输出影响最小的参数，而神经元剪枝则会移除整个神经元或滤波器 \[60\]。

剪枝可以产生稀疏模型，需要专用硬件或算法来利用稀疏性获得计算性能提升\[61\]。当剪枝与量化结合使用时，可以显著压缩模型以用于边缘部署。

#### 4.2.1.3. 知识蒸馏

知识蒸馏是将知识从一个大型、复杂的模型（教师模型）转移到一个更小、更高效的模型（学生模型）\[62\]。学生模型经过训练以复制教师模型的输出，在参数更少的情况下实现类似的性能。

这种技术能够创建适合边缘设备的轻量级模型，而不会有显著的准确性损失。知识蒸馏在图像分类和自然语言处理等任务中特别有效 \[63\]。

4.2.1.4 神经架构搜索

神经架构搜索（NAS）在为不同的边缘环境找到最优模型架构中发挥了重要作用。

MobileVision V3 通过 NAS 相比 V2 显著提升了模型性能。

“一次训练，随处部署（Once-for-all）” 可以在不同约束条件下搜索模型架构，满足多样化的边缘设备设置。

Howard, Andrew, et al. "Searching for mobilenetv3." *Proceedings of the IEEE/CVF international conference on computer vision*. 2019\.

Cai, Han, et al. "Once-for-all: Train one network and specialize it for efficient deployment." *arXiv preprint arXiv:1908.09791* (2019).

4.2.1.5 其他模型压缩技术

**矩阵分解**：大多数模型的权重来自全连接层的矩阵。使用两个低秩矩阵的乘积来表示模型可以显著减少模型的大小。

Lan, Z. "Albert: A lite bert for self-supervised learning of language representations." *arXiv preprint arXiv:1909.11942* (2019).

**权重聚类**：首先将层的权重分组为 N 个聚类，并为所有相似权重共享质心值。这可以将权重减少高达 5 倍，同时准确性损失最小。

Han, Song, Huizi Mao, and William J. Dally. "Deep compression: Compressing deep neural networks with pruning, trained quantization and huffman coding." *arXiv preprint arXiv:1510.00149* (2015).

[https://www.tensorflow.org/model\_optimization/guide/clustering](https://www.tensorflow.org/model_optimization/guide/clustering)

### 4.2.2. 用于边缘部署的框架

专门的框架通过提供针对资源限制进行优化的工具，促进了人工智能模型在边缘设备上的开发和部署。

#### 4.2.2.1. TensorFlow Lite

TensorFlow Lite 是一个轻量级的跨平台框架，专为在移动和嵌入式设备上部署 TensorFlow 模型而设计 \[64\]。它支持诸如量化等模型优化技术，并通过委托 API 为 GPU 和 NPU 提供硬件加速。

TensorFlow Lite 将模型转换为专门的 FlatBuffer 格式，减小了尺寸并提高了加载时间。它还提供了一个针对设备端推理进行优化的解释器，使开发人员能够在 Android、iOS 和嵌入式 Linux 平台上高效地运行模型 \[65\]。

#### 4.2.2.2. PyTorch Mobile

PyTorch Mobile 将 PyTorch 框架扩展到移动和边缘环境，允许开发人员在资源有限的设备上运行 PyTorch 模型 \[66\]。它支持模型量化，并提供用于优化和转换模型以进行部署的工具。

PyTorch Mobile 与 Android 和 iOS 平台集成，实现了在移动应用程序中无缝部署人工智能模型。它还支持自定义移动解释器，通过仅包含必要的运算符来减小应用程序的大小 \[67\]。

## 4.3. 协同设计策略

协同设计策略涉及联合优化硬件和软件组件，以实现边缘人工智能系统的更优性能和效率。

### 4.3.1. 硬件 \- 软件协同优化

硬件 \- 软件协同优化专注于同步设计算法和硬件架构，以最大限度地提高性能和能源效率 \[68\]。通过了解硬件的约束和能力，软件开发人员可以调整算法以利用特定功能，例如并行处理单元或专门的指令。

反过来，硬件设计者可以创建针对人工智能算法计算模式优化的架构，例如利用数据复用和最小化内存访问。通过这种协同方法，硬件和软件可以相互优化，适用于边缘人工智能应用\[69\]。

### 4.3.2. 协作开发方法

协作开发方法涉及硬件制造商、软件开发人员和人工智能研究人员之间的合作，以创建边缘人工智能的综合解决方案 \[70\]。开源社区和行业联盟在推进边缘人工智能技术方面发挥着重要作用。

像 MLPerf 基准测试套件这样的举措为评估不同硬件和软件配置下的人工智能性能提供了标准化指标 \[71\]。协同努力有助于识别瓶颈、分享最佳实践，并加速边缘人工智能部署中的创新。

# 5\. 业界对边缘人工智能的采用与相关举措

由于领先科技公司的大量投资和举措，边缘人工智能近年来取得了显著增长。这些公司正开发硬件、软件和平台，以实现边缘高效的人工智能处理，进而推动行业变革并促进创新。

## 5.1. 领先的科技公司

多家大型科技公司在边缘人工智能的开发中处于前沿，每家公司都为该领域带来了独特的解决方案和战略。

![][image1]

*各大科技巨头对边缘人工智能的采用方式各不相同*

### 5.1.1. Meta

前身为 Facebook 的 Meta 在推动人工智能技术进步方面发挥了关键作用，尤其是在开源领域。

#### 5.1.1.1. 开源小语言模型（SLMs）和大语言模型（LLMs）

Meta 发布了多个开源的小语言模型（SLMs）和大语言模型（LLMs），以推动人工智能研究与开发。值得注意的是，2023 年 2 月，Meta 推出了名为 "LLaMA"（Large Language Model Meta AI）的基础语言模型系列，参数规模从 70 亿到 650 亿不等\[72\]。这些模型经过优化，所需计算资源更少，使得它们在研究和边缘设备上的部署更加便捷。

#### 5.1.1.2. 对边缘人工智能格局的影响

LLaMA 模型的发布对边缘人工智能格局产生了重大影响。通过提供高性能且资源需求较少的模型，Meta 使开发人员能够在边缘设备上实现先进的人工智能功能 \[73\]。这种民主化加速了在计算资源有限的设备上，自然语言处理、个性化助手和实时翻译服务等应用的创新。

### 5.1.2. Apple

苹果公司一直强调隐私和设备端智能，将人工智能功能直接集成到其硬件和软件生态系统中。

#### 5.1.2.1. 设备端智能与小语言模型（SLMs）

苹果公司的方法以在设备本地进行人工智能计算为核心，以增强隐私性和效率 \[74\]。该公司利用小语言模型实现诸如 Siri 的语音识别、QuickType 键盘建议以及照片应用中的图像处理等功能。

苹果的神经引擎（Neural Engine）是其 A 系列和 M 系列芯片中的专用人工智能处理器，用于加速机器学习任务，并保持能效\[75\]。这一硬件使得 iPhone、iPad 和 Mac 等设备能够无缝运行复杂的 AI 功能，而无需依赖云服务。

#### 5.1.2.2. ReaLM 大语言模型与隐私计算

Apple 正在投资开发先进的语言模型以改进其 AI 功能。尽管由于该公司的保密性，具体细节尚不明确，但有报告表明 Apple 正在内部开发自己的大型语言模型（LLM）\[76\]。此外，Apple 的“私密中继”和设备端处理计划体现了其对用户隐私的承诺，即通过最小化数据传输并在本地处理敏感信息 \[77\]。

### 5.1.3. Google

Google 在云端和边缘 AI 领域一直处于领先地位，提供硬件和软件解决方案，以支持各种平台上的 AI 部署。

#### 5.1.3.1. 边缘 TPU 芯片

谷歌的边缘张量处理单元（Edge TPUs）是专门设计用于在边缘设备上加速机器学习任务的专用集成电路（ASICs）\[78\]。这些芯片能够以低延迟和低功耗高效执行深度学习模型，使其成为物联网设备、智能相机和嵌入式系统等应用的理想选择。

Google 的 Edge TPU 可通过其 Coral 平台获得，该平台提供硬件模块和开发工具，用于构建边缘人工智能应用 \[79\]。

#### 5.1.3.2. ML Kit 平台

ML Kit 是 Google 的移动开发工具包（SDK），将机器学习功能带到 Android 和 iOS 应用中 \[80\]。它为视觉和自然语言处理任务提供设备端 API，例如文本识别、人脸检测和语言翻译。通过在设备端运行这些模型，ML Kit 能够减少延迟并增强隐私保护。

ML Kit 还支持自定义模型的部署，开发者可以集成自己优化后的 TensorFlow Lite 模型以适配移动设备 \[81\]。

### 5.1.4. Qualcomm

Qualcomm 专注于通过其骁龙（Snapdragon）处理器和人工智能举措增强移动设备中的人工智能处理能力。

#### 5.1.4.1. 集成 Llama 2 大语言模型

2023 年 7 月，Qualcomm 宣布与 Meta 合作，优化并部署基于 Llama 2 的 AI 实现，适用于搭载骁龙平台的设备 \[82\]。这一合作旨在实现设备端的生成式 AI 应用，如智能虚拟助手和增强型生产力工具，而无需依赖云连接。

通过利用 Qualcomm 的人工智能引擎和 Meta 的 Llama 2 模型，该集成旨在为智能手机、个人电脑和其他设备上的人工智能任务提供高性能和高能效 \[82\]。

#### 5.1.4.2. 混合边缘-云端模式

Qualcomm 提倡一种结合设备端和云端计算的混合 AI 处理模式 \[83\]。这种方法最大限度地发挥了边缘处理的优势 —— 如降低延迟和提高隐私性 —— 同时利用云资源处理需要更大计算能力的更复杂任务。

混合模型允许可扩展的人工智能解决方案适应各种应用和网络条件，增强跨设备的用户体验 \[84\]。

### 5.1.5. 其他重要举措

其他几家科技公司也为边缘人工智能的发展做出了重大贡献：

* **阿里巴巴**：阿里云提供边缘计算解决方案，如集成了人工智能功能用于工业应用的 Link IoT Edge 平台 \[85\]。该平台支持实时数据处理和分析，提升了边缘设备的计算能力。
* **三星**：三星在其 Exynos 处理器中集成了人工智能加速器，增强了设备端在图像识别和自然语言处理等任务方面的人工智能能力 \[86\]。此外，三星还在智能家电和物联网设备领域对边缘人工智能进行了探索。
* **华为**：华为的昇腾系列人工智能处理器以高性能支持边缘计算 \[87\]。Atlas 硬件平台支持在智能城市和自动驾驶等领域部署人工智能应用。
* **微软**：微软的 Azure IoT Edge 将云智能扩展到边缘设备，允许人工智能模型在本地运行 \[88\]。该平台支持容器化工作负载，并提供用于管理边缘部署的工具。
* **英伟达**：英伟达的 Jetson 平台为各种应用提供支持人工智能的边缘计算设备 \[89\]。此外，英伟达还提供了 NVIDIA TensorRT 等软件框架，用于优化人工智能模型在边缘设备上的部署。

## **5.2. 对 Edge AI 生态系统的影响**

领先科技公司的举措对 Edge AI 生态系统产生了重大影响，促进了增长、创新和协作。

### **5.2.1. 人工智能的民主化**

开源模型和可访问的开发工具使人工智能技术变得民主化，使更广泛的开发人员和组织能够实施人工智能解决方案 \[90\]。Meta 发布的LLaMA模型和谷歌的 TensorFlow Lite 等举措降低了进入门槛，促进了各个领域的创新。

这种民主化加速了人工智能的采用，特别是在资源限制以前限制了技术进步的行业 \[91\]。

### **5.2.2. 加速创新和竞争**

各大公司的投资和技术进步刺激了 Edge AI 市场的竞争\[92\]。这种竞争推动了快速创新，从而带来了更高效的硬件、更优化的算法和新颖的应用程序。

随着公司努力使其产品差异化，消费者可以从改进的产品和服务中受益，例如更智能的设备和增强的用户体验 \[93\]。

### **5.2.3. 产学研合作**

产学研合作对于推动 Edge AI 研究和开发至关重要 \[94\]。伙伴关系促进知识交流、资源共享和新技术的开发。

例如，联合研究项目重点关注模型压缩技术、节能硬件设计和隐私保护 AI 的联合学习等领域 \[95\]。这些合作有助于Edge AI 生态系统的整体发展和成熟。

# **6\. 推动 Edge AI 需求的应用领域**

Edge AI 变得越来越重要，因为它能够解决基于云的 AI 的局限性，特别是在需要低延迟、增强隐私和减少带宽使用的应用中。多个领域正在推动对Edge AI 的需求，包括医疗保健、机器人技术、虚拟助手和自动驾驶。这些领域的要求必须在更靠近源头的地方处理数据。

*该表总结了Edge AI 应用程序在延迟、隐私和带宽方面的要求。*

## **6.1. 医疗保健**

医疗保健行业将从Edge AI 中受益匪浅，因为它可以提供更直接、个性化的医疗服务，同时保护患者的隐私。

### **6.1.1. 移动医疗和个性化医疗**

移动医疗 (mHealth) 利用移动设备和可穿戴技术来监测健康指标、提供医疗干预措施并提供个性化的医疗服务 \[96\]。个性化医疗根据患者个体特征量身定制治疗方案，需要实时数据处理和分析。

Edge AI 通过在智能手机和可穿戴设备等设备上本地处理数据来促进移动医疗，从而实现持续监控和即时反馈，而无需持续的云连接 \[97\]。这对于慢性病管理等应用至关重要，因为及时干预可以改善患者的治疗效果。

### **6.1.2. 医疗保健领域的Edge AI 需求**

医疗保健应用对人工智能系统提出了严格的要求，特别是在隐私、延迟和带宽方面。

#### **6.1.2.1. 关键响应的延迟需求**

在医疗紧急情况下，快速响应时间至关重要。例如，老年人跌倒检测系统必须在事故发生后立即向护理人员或紧急服务部门发出警报 \[98\]。此类警报可接受的延迟通常小于 150 毫秒 \[9\]。Edge AI 可以实时处理传感器数据，以便及时检测跌倒和其他关键事件。

 在微创手术期间，Edge AI 可以实时分析来自腹腔镜或机器人手术器械的视频，以识别解剖结构、组织和潜在的关注区域。例如，AI 可以在外科医生的显示器上提供视觉叠加，突出显示血管、神经或肿瘤，有助于避免意外伤害并确保更精确的切割。由于处理是在手术室内本地的Edge设备上完成的，因此可以立即反馈，而不会出现基于云的解决方案的延迟，这对于时间敏感的手术程序至关重要。这提高了安全性、准确性和整体手术效果。

#### **6.1.2.2. 隐私法规与合规性**

医疗保健数据高度敏感，受到美国《健康保险流通与责任法案》（HIPAA）和欧盟《通用数据保护条例》（GDPR）等法规的保护\[100\]。GDPR 第 9 条将健康数据归类为特殊个人数据，需要明确同意才能处理\[33\]。

Edge AI 通过将患者数据保存在本地设备上来增强隐私，降低数据泄露的风险并确保遵守隐私法规 \[101\]。这对于收集生物特征数据或个人健康信息的应用程序尤为重要。

#### **6.1.2.3. 带宽限制**

涉及高分辨率成像或增强现实 (AR) 的医疗应用会消耗大量带宽 \[102\]。例如，使用 AR/VR 技术的远程医疗咨询可能需要 10-50 Mbps 的数据速率 \[34\]。将这些数据传输到云端进行处理会给网络资源带来压力并产生高昂的成本。

Edge AI 通过在本地处理数据来减少带宽使用，仅在必要时传输必要信息\[103\]。这使得先进的医疗应用更容易获得，即使在网络基础设施有限的地区也是如此。

### **6.1.3. 最新进展**

最近的几项发展凸显了 Edge AI 在医疗保健领域日益增长的作用。

#### **6.1.3.1. Med- PaLM 2 by Google**

谷歌推出了 Med- PaLM 2，这是一款针对医疗数据集进行微调的 LLM，可以高精度地回答医疗问题 \[104\]。虽然该模型主要设计用于云部署，但目前正在努力优化此类模型以适应Edge设备，使医生和患者能够离线或在低连接环境中使用高级诊断工具。

#### **6.1.3.2. 合作努力（Fitbit 和 Google Research）**

Fitbit 与 Google Research 合作，正在开发一款专门针对个性化健康和保健的 LLM \[105\]。目标是根据从可穿戴设备收集的数据为用户提供摘要和建议。通过在本地处理这些数据，用户可以从个性化见解中受益，而不会损害他们的隐私。

#### **6.1.3.3 设备上的健康监测（Apple Watch）**

苹果已将以健康为中心的人工智能功能集成到 Apple Watch 中，利用设备上的机器学习实现跌倒检测、心律不齐通知和血氧监测等功能 \[28\]。这些功能独立于云服务运行，确保即时响应并保护用户数据。

---

## **6.2. 机器人技术**

机器人技术是Edge AI 至关重要的另一个领域，特别是当机器人越来越融入日常生活和工业流程时。

### **6.2.1. 法学硕士与机器人技术的融合**

GPT-3 和 GPT-4 等 LLM 的出现激发了人们对将高级语言理解集成到机器人系统的兴趣 \[106\]。这种集成使机器人能够解释复杂的指令，进行自然语言交互，并执行需要上下文理解的任务。

### **6.2.2 机器人技术中的Edge AI 需求**

机器人应用对人工智能系统提出了严格的要求，需要实时处理、数据隐私和高效的带宽使用。

#### **6.2.2.1. 实时处理和延迟约束**

在动态环境中运行的机器人必须处理传感器数据并实时做出决策 \[107\]。控制回路中的延迟可能会导致性能不佳或存在安全隐患。第三代合作伙伴计划 (3GPP) 标准表明，5G 远程控制机器人需要 10 至 100 毫秒之间的端到端延迟和 2 毫秒的中间数据上传延迟 \[35\]。

Edge AI 允许机器人在本地处理数据，从而减少延迟并提高响应能力\[108\]。

6.2.2.2. 实时处理和延迟约束

家用机器人（例如家庭助理或清洁机器人）通常在个人空间中运行，可能会收集敏感数据 \[109\]。在设备上处理这些数据可以防止个人信息通过网络传输，从而保护用户隐私。

行为模式等数据的机密性，从而解决隐私问题并建立用户信任\[110\]。

#### **6.2.2.3. 实时处理和延迟约束**

配备多模态传感器（如摄像头、激光雷达、触觉传感器）的机器人会产生大量数据 \[111\]。将这些数据传输到云端进行处理需要大量带宽，在连接有限的环境中可能不可行。

3GPP 标准建议，对于分割推理，必要的上传数据速率范围为 80 Mbps 至 12 Gbps，具体取决于神经网络架构 \[37\]。Edge AI 通过在本地处理传感器数据来缓解带宽问题，仅在需要时传输必要信息 \[112\]。

### **6.2.3. 案例研究和实施**

→      **NVIDIA Isaac 平台**：NVIDIA 的 Isaac 平台提供了一套工具和硬件，用于开发具有Edge处理能力的 AI 机器人 \[113\]。它可以实现实时感知、导航和操纵任务。

→      **波士顿动力公司**：Spot 和 Atlas 等机器人使用机载处理进行实时控制和避障 \[114\]。Edge AI 允许这些机器人自主运行，而无需依赖云连接。

→      **亚马逊 Astro** ：亚马逊的家用机器人 Astro 利用Edge计算执行家庭监控和个人助理等任务，同时保护用户隐私 \[115\]。

---

## **6.3. 虚拟助手**

虚拟助手已经无处不在，为用户提供语音激活的帮助和个性化服务。

### **6.3.1. ChatGPT 之后的演变**

ChatGPT 的发布展示了 LLM 在生成类似人类的文本和参与复杂对话方面的潜力 \[116\]。这引发了能够进行更自然和情境感知交互的虚拟助手的开发热潮。

企业正在探索在Edge设备上部署 LLM 的方法，以增强虚拟助手，同时解决隐私和性能问题 \[117\]。

### **6.3.2. 虚拟助理的 Edge AI 要求**

虚拟助手的关键要求包括低延迟、隐私保护和高效带宽使用。

#### **6.3.2.1 用户体验和延迟**

虚拟助手需要及时响应用户查询，以提供无缝体验 \[118\]。NVIDIA 的研究表明，超过 200 毫秒的端到端延迟会给用户带来明显影响，从而可能降低交互质量 \[38\]。

Edge AI 通过在本地处理语音识别和自然语言理解来减少延迟，从而实现更快的响应并提高用户满意度\[119\]。

#### **6.3.2.2 私下处理敏感用户数据**

虚拟助理通常会处理个人信息，包括联系人、消息和搜索历史记录 \[120\]。在设备上处理这些数据可以最大限度地减少数据暴露并降低未经授权访问的风险，从而增强隐私。

Edge AI 可确保敏感信息保留在用户的设备上，从而符合隐私法规并增加用户信任\[121\]。

#### **6.3.2.3 降低高用户量带宽**

随着数百万用户与虚拟助手互动，将数据传输到云服务器可能会导致网络拥塞和高昂的运营成本 \[122\]。根据 3GPP，分割 AI 图像识别可能需要 144 Mbps 的上行数据速率 \[39\]。

Edge AI 通过在本地处理数据来缓解带宽问题，使虚拟助理服务更具可扩展性和成本效益\[123\]。

### **6.3.3. 基于Edge的虚拟助手模型**

→      **Apple Siri** : Apple 的 Siri 利用设备上的处理进行语音识别和自然语言任务，提高了响应能力和隐私保护\[124\]。

→      **Google Assistant** ：谷歌推出了设备上的语音识别模型，以增强Google Assistant的性能，减少对云处理的依赖\[125\]。

→      **面向Edge设备的 Amazon Alexa 语音服务 (AVS) 集成**：亚马逊提供了将 Alexa 集成到具有Edge功能的设备中的工具，允许本地处理语音命令 \[126\]。

---

## **6.4. 自动驾驶**

自动驾驶汽车 (AV) 代表一个复杂的领域，需要实时处理和先进的 AI 功能。

### **6.4.1. 模块化架构的局限性**

传统的自动驾驶汽车系统采用模块化架构，将任务分为感知、预测和规划模块 \[127\]。虽然这种方法简化了开发，但它限制了系统进行整体推理和处理复杂、非结构化场景的能力。

LLM 可通过跨模块集成知识来增强 AV 系统，从而实现更复杂的决策 \[128\]。然而，由于计算方面的限制，在车辆中部署 LLM 存在挑战。

### **6.4.2. 自动驾驶汽车的 Edge AI 要求**

AV 需要满足严格延迟、隐私和数据管理要求的 AI 系统。

#### **6.4.2.1 安全关键延迟要求**

自动驾驶汽车必须在几毫秒内处理传感器数据并做出驾驶决策，以确保安全 \[41\]。3GPP 规定自动驾驶场景可能需要 10 毫秒的端到端延迟 \[42\]。

Edge AI 能够实时处理传感器输入，例如摄像头信号、激光雷达和雷达数据，而不会产生与云通信相关的延迟\[129\]。

#### **6.4.2.2 安全关键延迟要求**

将车辆数据传输到云服务器可能会暴露敏感信息，例如位置历史和驾驶模式\[130\]。这引发了用户的隐私问题和潜在的监管问题。

通过板载处理数据，Edge AI 可以保护用户隐私并遵守数据保护法规 \[131\]。

#### **6.4.2.3 管理海量数据生成**

自动驾驶汽车会产生大量数据，每辆车每天最多会产生 4 TB 的数据 \[43\]。由于带宽限制和成本，将这些数据上传到云端是不切实际的。

Edge AI 允许自动驾驶汽车在本地处理和分析数据，仅在必要时传输必要的信息 \[132\]。这减轻了网络基础设施的负担并提高了系统效率。

### **6.4.3. 将 LLM 融入车辆系统**

将 LLM 集成到 AV 中可以增强以下功能：

→      **自然语言交互**：使乘客能够使用自然语言与车辆进行通信，以实现导航、娱乐或控制功能\[133\]。

→      **情境理解**：提高车辆解释复杂驾驶场景和做出更明智决策的能力\[134\]。

→      **个性化**：根据用户偏好和行为定制驾驶体验\[135\]。

特斯拉等公司正在探索在车辆中使用先进的人工智能模型来增强自主性和用户体验 \[136\]。Edge AI 对于在车辆硬件的计算约束内部署这些模型至关重要。

---

# **7\. EdgeAI应用的跨域需求**

Edge AI 应用涵盖多个领域，每个领域都有独特的要求。但是，这些领域中的某些基本需求是一致的。延迟、隐私和安全以及带宽限制是影响Edge AI 解决方案设计和部署的关键考虑因素。了解和满足这些跨领域要求对于有效实施Edge AI 技术至关重要。

## **7.1. 延迟考虑**

在Edge AI 应用中，最大限度地减少延迟对于确保及时响应、增强用户体验以及在某些情况下确保安全至关重要。

### **7.1.1. 不同应用程序可容忍的延迟阈值**

根据具体要求和延迟后果，不同的应用程序具有不同的可容忍延迟阈值。

→      **医疗保健应用**：在远程手术或应急响应系统等关键医疗保健场景中，必须尽量减少延迟以防止出现不良后果。延迟阈值通常小于 100 毫秒，以确保实时反馈和控制 \[137\]。

→      **自动驾驶汽车**：自动驾驶汽车需要超低延迟来处理传感器数据并即时做出驾驶决策。延迟必须在 10 毫秒以内，以响应动态驾驶条件并避免碰撞 \[138\]。

→      **工业自动化**：使用机器人和自动化系统的制造过程需要低于 1 毫秒的延迟来同步操作并保持精度 \[139\]。

→      **虚拟现实 (VR) 和增强现实 (AR)** ：对于沉浸式体验，延迟应小于 20 毫秒，以防止晕动症并确保无缝的用户体验 \[140\]。

→      **金融交易**：高频交易系统要求微秒级的延迟才能利用市场波动\[141\]。

→      **消费类应用程序**：虚拟助手和移动应用程序的目标是将延迟控制在 200 毫秒以下，以保持敏捷且引人入胜的用户体验 \[142\]。

了解这些阈值有助于设计满足每个应用域特定延迟要求的Edge AI 系统。

### **7.1.2. 减少延迟的技术**

为了达到必要的延迟水平，Edge AI 系统采用了各种技术：

→      **设备上处理**：在设备上本地执行计算消除了将数据传输到远程服务器的需要，从而显著减少了延迟 \[143\]。

→      **高效的模型设计**：开发需要更少计算资源的轻量级、优化的人工智能模型可以加快处理时间\[144\]。

→      **硬件加速**：利用 GPU、TPU、NPU 和 FPGA 等专用硬件可以加速 AI 计算，减少推理时间 \[145\]。

→      **Edge缓存**：将经常访问的数据或预处理的信息存储在Edge可减少检索时间\[146\]。

→      **网络优化**：实施高效的通信协议和网络配置可最大限度地减少传输延迟\[147\]。

→      **并行处理**：利用多核处理器和并行计算技术提高处理速度\[148\]。

→      **压缩和量化**：通过压缩和量化技术减少人工智能模型的大小，可以减少处理时间和内存使用量\[149\]。

通过集成这些技术，Edge AI 应用程序可以满足各个领域的严格延迟要求。

## **7.2. 隐私和安全**

隐私和安全在Edge AI 应用中至关重要，尤其是在处理敏感数据时。确保数据保护和遵守法规对于维护用户信任和防止未经授权的访问至关重要。

### **7.2.1. 数据保护条例**

有几项法规管理数据保护，影响Edge AI 系统的设计和运行方式：

→      **通用数据保护条例 (GDPR)** ：GDPR 在欧盟实施，对个人数据处理制定了严格的准则，要求明确征得用户同意并最小化数据 \[150\]。Edge AI 通过在本地处理数据来促进合规性，减少了将个人数据传输到集中式服务器的需要。

→      **健康保险流通与责任法案 (HIPAA)** ：在美国，HIPAA 为保护敏感的患者健康信息制定了标准 \[151\]。医疗保健应用中的Edge AI 可以通过将患者数据保存在设备上来提高合规性。

→      **加州消费者隐私法案 (CCPA)** ：CCPA 赋予加州居民对其个人信息的权利，并对处理此类数据的企业规定了义务 \[152\]。Edge AI 可以通过最大限度地减少数据收集和本地处理数据来帮助企业遵守规定。

→      **儿童网络隐私保护法（COPPA）** ：COPPA 规范了 13 岁以下儿童的个人信息的在线收集\[153\]。针对未成年人的Edge AI 应用程序必须确保数据保护并遵守这些法规。

### **7.2.2. 安全的设备处理**

确保设备处理的安全涉及多种策略：

→      **加密**：对静态和传输中的数据实施强大的加密协议可防止未经授权的访问\[154\]。

→      **安全启动和可信执行环境 (TEE)** ：设备可以使用安全启动过程和 TEE 来验证软件完整性并隔离敏感计算 \[155\]。

→      **匿名化和数据最小化**:仅处理必要的数据并匿名化个人标识符可降低泄露敏感信息的风险\[156\]。

→      **定期安全更新**:保持设备固件和软件更新，修补漏洞并增强安全性\[157\]。

→      **生物特征身份验证**:使用指纹或面部识别等生物特征方法为访问设备和应用程序增加了额外的安全保障\[158\]。

→      **具有安全功能的Edge AI 框架**：利用提供内置安全功能的 AI 框架，例如安全模型部署和加密模型文件 \[159\]。

通过实施这些措施，Edge AI 应用程序可以提供安全和私密的服务。

## **7.3. 带宽和网络限制**

带宽限制和网络约束显著影响Edge AI 应用的性能和可扩展性。高效利用带宽对于降低成本和确保一致的服务质量至关重要。

### **7.3.1. 对网络基础设施的影响**

 Edge AI 可以通过多种方式减轻网络基础设施的压力：

● 	**减少数据传输**：通过在本地处理数据，Edge AI 最大限度地减少了通过网络传输大量原始数据的需要 \[160\]。这减少了网络拥塞并降低了对带宽的需求。

● 	**可扩展性**：将处理任务卸载到Edge设备，可以使网络支持更多的设备和用户，而无需进行重大的基础设施升级\[161\]。

● 	**减少延迟**：减少对集中式服务器的依赖可以减少往返时间，提高整体网络性能\[162\]。

● 	**本地化内容交付**：Edge缓存和内容交付网络 (CDN) 将内容存储到更靠近用户的地方，从而提高了访问速度并减少了主干网络负载 \[163\]。

然而，随着Edge设备数量的增加，需要有效的网络管理和协调，以防止干扰并保持服务质量\[164\]。

### **7.3.2. 对用户和提供商的成本影响**

高效的带宽使用具有直接的成本优势：

● 	**为用户节省成本**：用户可以减少数据使用量并降低网络费用，特别是在数据成本高或实施数据上限的地区\[165\]。

● 	**服务提供商的运营效率：服务提供商可以通过减少集中数据**中心传输和处理的数据量来降低运营成本\[166\]。

● 	**基础设施投资**：通过利用Edge AI，提供商可以推迟或减少昂贵的基础设施升级以处理增加的数据流量的需要 \[167\]。

● 	**能耗**:较低的数据传输减少了网络设备的能耗，有助于节省成本和产生环境效益\[168\]。

● 	**收入机会**：提供商可以提供新服务，并将Edge计算功能货币化，创造额外的收入来源\[169\]。

# **8\. 挑战和未来方向**

Edge AI 在各个领域都具有巨大的前景；然而，它面临着一些挑战，需要解决这些挑战才能充分发挥其潜力。本节重点介绍将塑造 Edge AI 未来的关键技术挑战、道德考量和研究机会。

## **8.1. 技术挑战**

EdgeAI部署遇到了源于Edge设备固有局限性和AI模型复杂性的技术障碍。

### **8.1.1. Edge设备的计算限制**

与云服务器相比，Edge设备（例如智能手机、物联网传感器和嵌入式系统）的计算资源通常有限。这些限制包括较低的处理能力、内存和存储容量，这使得运行复杂的 AI 模型变得具有挑战性 \[170\]。优化模型以适应这些限制而不会显著降低准确性是一项关键挑战。

### **8.1.2. 能源效率和电池寿命**

许多Edge设备都是由电池供电的，需要节能运行以延长电池寿命。运行人工智能计算可能非常耗电，导致电池快速耗尽\[171\]。开发节能算法和硬件对于确保 Edge AI 应用的可持续性和日常实用性至关重要。

### **8.1.3. 模型准确率与资源消耗**

平衡模型精度和资源消耗是一项重大挑战。高精度人工智能模型往往更大，需要更多的计算资源，这在Edge设备上可能不可行 \[172\]。模型压缩、量化和修剪等技术可以减小模型大小，但也可能影响性能。实现最佳平衡是一个持续的研究领域。

## **8.2. 伦理和监管考虑**

随着 Edge AI 变得越来越普遍，道德问题和法规合规性变得越来越重要。

### **8.2.1. 确保数据隐私和用户同意**

虽然 Edge AI 通过在本地处理数据来增强隐私，但它仍然需要谨慎处理个人数据\[173\]。开发人员必须实施强大的安全措施，以防止未经授权的访问，并遵守 GDPR 和 HIPAA 等数据保护法规。透明的数据处理实践和用户教育对于维持信任也很重要。

### **8.2.2. 解决Edge AI 模型中的偏见和公平性**

AI 模型可能会无意中延续训练数据中存在的偏见 \[174\]。在Edge设备上部署有偏见的模型可能会导致不公平或歧视性的结果。确保公平并解决Edge AI 模型中的偏见是一项道德要求，需要在模型开发和部署期间仔细考虑。这包括多样化训练数据集和实施偏见缓解技术。

## **8.3. 研究机会**

### **8.3.1. 模型压缩的进步**

研究先进的模型压缩技术（如量化、修剪和知识提炼），有助于创建适用于Edge设备的高效模型，而不会显著降低准确性 \[175\]。该领域的持续创新将使更复杂的人工智能应用程序能够在资源受限的设备上运行，从而扩展 Edge AI 的功能。

### **8.3.2. Edge到云端协作人工智能**

开发Edge设备和云服务器之间无缝协作的框架可以优化性能和资源利用率\[176\]。Edge到云的协同作用允许复杂任务得到适当分配，增强 Edge AI 应用程序的功能，同时充分利用Edge和云计算的优势。

### **8.3.3. 标准化和互操作性**

建立 Edge AI 的标准和协议可以促进设备和平台之间的互操作性 \[177\]。标准化工作可以加速采用、提高安全性并创建更具凝聚力的 Edge AI 生态系统。

# **9\. 结论**

## 9.1. 回顾Edge AI 的必要性

人工智能的快速发展催生了强大的模型和应用，这些模型和应用需要大量的计算资源和实时处理能力。传统的基于云的人工智能部署面临着高延迟、隐私问题和带宽限制等挑战，这阻碍了它们在时间敏感和隐私关键型应用中的有效性 \[178\]。如本章所述， Edge AI 通过在Edge设备上本地处理数据来解决这些挑战，从而减少延迟、增强数据隐私并降低带宽使用率 \[179\]。

Edge AI 的必要性在各个领域都显而易见。在医疗保健领域，实时监控和即时响应对于患者治疗结果至关重要 \[96\]。机器人技术需要对动态环境进行即时处理 \[108\]，而虚拟助手则受益于降低延迟和增强隐私 \[119\]。自动驾驶需要超低延迟和实时决策以确保安全 \[138\]。这些应用强调了 Edge AI 在满足基于云的解决方案无法充分满足的严格要求方面的重要性。

## **9.2.  Edge AI 的变革潜力**

Edge AI 具有变革潜力，因为它可以实现响应迅速、私密且高效的智能应用程序。通过将计算更接近数据源， Edge AI 可以支持新的用例并增强现有用例。在医疗保健领域，它有助于个性化医疗和及时干预，同时保持患者的隐私 \[101\]。在机器人和自主系统中， Edge AI 增强了自主性和响应能力，使机器人和车辆无需持续的云连接即可安全高效地运行 \[113\]。

硬件创新的进步（例如专用的Edge AI 芯片和集成的 NPU）加上模型压缩技术等软件优化，使得在资源受限的设备上部署复杂的 AI 模型成为可能 \[68\]。领先技术公司之间的协作努力正在推动创新并使 AI 技术的使用变得民主化，从而进一步加速了Edge AI 的采用 \[90\]。

## 9.3. 对未来前景的最终思考

展望未来， Edge AI 将在未来人工智能中发挥关键作用。正在进行的研究和开发旨在克服技术挑战（例如计算限制和能源效率），这将进一步增强Edge设备的功能 \[175\]。解决道德问题（包括数据隐私、安全和公平性）对于建立信任和确保负责任地部署 Edge AI 技术至关重要 \[174\]。

Edge AI 与 5G 网络和物联网 (IoT) 等其他新兴技术的融合将创造新的机遇和应用 \[180\]。随着 Edge AI 的不断发展，它将使城市更加智能、行业更加高效、生活质量更高。通过利用 Edge AI 的变革潜力，我们可以为未来铺平道路，让智能系统无缝融入社会的各个方面，带来即时、个性化和安全的好处。

[image1]: <data:image/png;base64,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>