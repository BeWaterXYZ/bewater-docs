(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{350:function(_,v,t){"use strict";t.r(v);var e=t(6),a=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"机器学习如何工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机器学习如何工作"}},[_._v("#")]),_._v(" 机器学习如何工作？")]),_._v(" "),v("p",[_._v("在深入探讨人工智能（AI）与加密货币的交集之前，首先要单独介绍人工智能领域的一些概念。由于本报告是为加密货币领域的读者撰写的，读者并非都对人工智能和机器学习概念有深刻理解。而理解相关概念至关重要，这样读者才能评估人工智能和加密货币交叉领域的哪些想法具有实质意义，并准确评估项目的技术风险。本节重点介绍人工智能的概念；此外，本节也重点介绍了人工智能与加密货币之间的关系。")]),_._v(" "),v("blockquote",[v("p",[_._v("通过本章的提示，我们可以了解人工智能概念与加密领域的关系。")])]),_._v(" "),v("p",[_._v("本节所涉主题概述：")]),_._v(" "),v("ul",[v("li",[_._v("机器学习（machine learing, ML）是人工智能的一个分支，在这个分支中，无需明确编程，机器就能通过数据做出决策。")]),_._v(" "),v("li",[_._v("ML流程分为三个步骤：数据、训练和推理。")]),_._v(" "),v("li",[_._v("训练模型的计算成本非常高，而推理则相对便宜。")]),_._v(" "),v("li",[_._v("学习主要有三种类型：监督学习、无监督学习和强化学习。")]),_._v(" "),v("li",[_._v("监督的学习是指从范例（由教师提供）中学习。教师可以向模型展示狗的图片，并告诉它这就是狗。然后，模型就能学会将狗与其他动物区分开来。")]),_._v(" "),v("li",[_._v("然而，许多流行的模型，如LLMs（如GPT-4和LLaMa），都是通过无监督学习来训练的。在这种学习模式中，教师不会提供任何指导或示例。相反，模型通过学习来发现数据中的模式。")]),_._v(" "),v("li",[_._v("强化学习（试错学习）主要用于连续决策任务，如机器人控制和游戏（如国际象棋或围棋）。")])]),_._v(" "),v("h2",{attrs:{id:"_1-1-人工智能和机器学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-人工智能和机器学习"}},[_._v("#")]),_._v(" 1.1 人工智能和机器学习")]),_._v(" "),v("p",[_._v("1956 年，一些当时最聪明的人聚集在一起参加了一个研讨会。他们的目标是提出智力的一般原则。他们指出：")]),_._v(" "),v("p",[_._v('"学习的每一个方面或智能的任何其他特征都可以被如此精确地描述出来，以至于可以制造一台机器来模拟它。"')]),_._v(" "),v("p",[_._v('在人工智能发展的早期，研究人员充满了乐观主义。从某种意义上说，他们的目标是人工通用智能（AGI），雄心勃勃。我们现在知道，这些研究人员并没有设法创造出具有通用智能的人工智能代理。70 年代和 80 年代的人工智能研究人员也是如此。在那个时期，人工智能研究人员试图开发 "基于知识的系统"。')]),_._v(" "),v("p",[_._v("基于知识的系统的关键理念是，我们可以为机器编写非常精确的规则。从本质上讲，我们从专家那里提取非常具体和精确的领域知识，并以规则的形式写下来供机器使用。然后，机器就可以利用这些规则进行推理并做出正确的决定。例如，我们可以尝试从马格努斯·卡尔森（Magnus Carlson）那里提炼出下棋的所有原则，然后构建一个人工智能来下棋。")]),_._v(" "),v("p",[_._v("然而，要做到这一点非常困难，即使有可能，也需要大量的人工来创建这些规则。试想一下，如何将识别狗的规则写入机器？机器如何才能从拥有像素到知道狗是什么？")]),_._v(" "),v("p",[_._v('人工智能的最新进展来自于一个被称为 "机器学习 "的分支。在这种模式下，我们不是为机器编写精确的规则，而是使用数据，让机器从中学习。使用机器学习的现代人工智能工具随处可见，例如 GPT-4、iPhone 上的 FaceID、游戏机器人、Gmail 垃圾邮件过滤器、医疗诊断模型、自动驾驶汽车......等等。')]),_._v(" "),v("h2",{attrs:{id:"_1-2-机器学习管道-pipeline"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-机器学习管道-pipeline"}},[_._v("#")]),_._v(" 1.2 机器学习管道（pipeline）")]),_._v(" "),v("p",[_._v("机器学习管道可分为三个主要步骤。有了数据，我们要训练模型，然后有了模型，我们就可以使用它。使用模型称为推理。因此，这三个步骤分别是数据、训练和推理。")]),_._v(" "),v("p",[_._v("高度概括来说，数据步骤包括查找相关数据并对其进行预处理。例如，如果我们要建立一个对狗进行分类的模型，我们需要找到狗和其他动物的图片，这样模型才能知道什么是狗，什么不是狗。然后，我们需要对数据进行处理，并确保数据格式正确，以便模型能够正确学习。例如，我们可能要求图片大小一致。")]),_._v(" "),v("p",[_._v("第二步是训练，我们利用数据来学习模型应该是什么样的。模型内部的方程是什么？神经网络的权重是多少？参数是什么？正在进行的计算是什么？如果模型不错，我们就可以测试它的性能，然后就可以使用它了。这就到了第三步。")]),_._v(" "),v("p",[_._v("第三步称为推理，即我们只是使用神经网络。例如，给神经网络一个输入，然后问一个问题：可以通过推理产生输出吗？")]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu26.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 28：机器学习管道的三个主要步骤是数据、训练和推理")]),_._v(" "),v("h3",{attrs:{id:"_1-2-1-数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-数据"}},[_._v("#")]),_._v(" 1.2.1 数据")]),_._v(" "),v("p",[_._v("现在，让我们深入了解一下每个步骤。第一：数据。广义上讲，这意味着我们必须收集数据并对其进行预处理。")]),_._v(" "),v("p",[_._v("让我们来看一个例子。如果我们想建立一个供皮肤科医生（专门治疗皮肤病的医生）使用的模型。我们首先要收集许多人脸的数据。然后，我们请专业皮肤科医生来评估是否存在皮肤病。现在可能会出现许多挑战。首先，如果我们拥有的所有数据都包括人脸，那么模型将很难识别身体其他部位的任何皮肤状况。其次，数据可能存在偏差。例如，大部分数据可能是一种肤色或色调的图片。第三，皮肤科医生可能会犯错，这意味着我们会得到错误的数据。第四，我们获得的数据可能会侵犯隐私。")]),_._v(" "),v("blockquote",[v("p",[_._v("经济激励措施有助于收集高质量的数据，而隐私保护技术可以解决用户在上述例子等敏感环境中的顾虑。")])]),_._v(" "),v("p",[_._v("我们将在第2章中介绍更深层次的数据挑战。不过，这可以让你了解到，收集好的数据并对其进行预处理是相当具有挑战性的。")]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu27.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 29：两个流行数据集的示意图。MNIST包含手写数字，而ImageNet包含数百万张不同类别的注释图像")]),_._v(" "),v("p",[_._v("在机器学习研究中，有许多著名的数据集。常用的有：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("MNIST数据集")]),_._v(" "),v("ul",[v("li",[_._v("说明：包含70,000个灰度图像格式的手写数字（0-9）")]),_._v(" "),v("li",[_._v("使用案例：主要用于计算机视觉中的手写数字识别技术。它是一个对初学者友好的数据集，通常用于教育领域。")])])]),_._v(" "),v("li",[v("p",[_._v("ImageNet")]),_._v(" "),v("ul",[v("li",[_._v("说明：一个包含1,400多万张图片的大型数据库，标注有20,000多个类别的标签。")]),_._v(" "),v("li",[_._v("使用案例：用于对象检测和图像分类算法的训练和基准测试。一年一度的ImageNet大规模视觉识别挑战赛（ILSVRC）一直是推动计算机视觉和深度学习技术发展的重要活动。")])])]),_._v(" "),v("li",[v("p",[_._v("IMDb评论")]),_._v(" "),v("ul",[v("li",[_._v("说明：包含来自 IMDb的50,000篇电影评论，分为两组：训练和测试。每组包含相同数量的正面和负面评论。")]),_._v(" "),v("li",[_._v("使用案例：广泛应用于自然语言处理（NLP）中的情感分析任务。它有助于开发能理解文本中表达的情感（正面/负面）并对其进行分类的模型。")])])])]),_._v(" "),v("p",[_._v("获取大型、高质量的数据集对于训练良好的模型极为重要。然而，这可能具有挑战性，尤其是对于较小的组织或个人搜索者而言。由于数据非常宝贵，大型机构通常不会共享数据，因为数据提供了竞争优势。")]),_._v(" "),v("blockquote",[v("p",[_._v("在透明度和开放性与盈利能力之间取得平衡的解决方案可以提高开放数据集的质量。")])]),_._v(" "),v("h3",{attrs:{id:"_1-2-2-训练"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-训练"}},[_._v("#")]),_._v(" 1.2.2 训练")]),_._v(" "),v("p",[_._v("管道的第二步是训练模型。那么，训练模型究竟意味着什么呢？首先，我们来看一个例子。一个机器学习模型（训练完成后）通常只有两个文件。例如，LLaMa 2（一个大型语言模型，类似于 GPT-4）就是两个文件：")]),_._v(" "),v("ul",[v("li",[_._v("参数，一个 140GB 的文件，其中包括数字。")]),_._v(" "),v("li",[_._v("run.c ，和一个简单的文件（约 500 行代码）。")])]),_._v(" "),v("p",[_._v("第一个文件包含 LLaMa 2 模型的所有参数，run.c 包含如何进行推理（使用模型）的说明。这些模型都是神经网络。")]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu28.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 30：神经网络的基本图示")]),_._v(" "),v("p",[_._v("在像上面这样的神经网络中，每个节点都有一堆数字。这些数字被称为参数，并存储在文件（惊喜！）参数中。获取这些参数的过程称为训练。下面是一个高度概括的过程。")]),_._v(" "),v("p",[_._v("想象一下训练一个识别数字（从0到9）的模型。我们首先收集数据（在这种情况下，我们可以使用MNIST数据集）。然后开始训练模型。")]),_._v(" "),v("ul",[v("li",[_._v('我们取第一个数据点，即 "5"。')]),_._v(" "),v("li",[_._v('然后，我们将图像（"5"）传递给网络。网络会对输入图像进行数学运算。')]),_._v(" "),v("li",[_._v("网络将输出一个0到9之间的数字。该输出是当前网络对该图像的预测。")]),_._v(" "),v("li",[_._v('现在有两种情况。网络要么是对的（它预测了 "5"），要么是错的（任何其他数字）。')]),_._v(" "),v("li",[_._v("如果它预测的数字正确，我们就不用做什么。")]),_._v(" "),v("li",[_._v("如果预测的数字不正确，我们将返回网络，对所有参数进行小幅修改。")]),_._v(" "),v("li",[_._v("在做了这些小改动后，我们再试一次。从技术上讲，网络现在有了新的参数，因此预测结果也会不同。")]),_._v(" "),v("li",[_._v("我们对所有数据点一直这样做，直到网络基本正确为止。")])]),_._v(" "),v("p",[_._v("这一过程本质上是顺序性的。我们首先通过整个网络传递一个数据点，看看预测结果如何，然后更新模型的权重。")]),_._v(" "),v("p",[_._v("训练过程可以更加全面。首先，我们必须选择模型架构。我们应该选择哪种类型的神经网络？并不是所有的机器学习模型都是神经网络。其次，在确定哪种架构最适合我们的问题，或者至少是我们认为最适合的架构之后，我们需要确定训练流程。例如，我们将以何种顺序将数据传递给网络？")]),_._v(" "),v("p",[_._v("第三，我们需要硬件设置。我们要使用什么样的硬件（CPU、GPU、TPU）？我们又该如何对其进行训练？")]),_._v(" "),v("p",[_._v("最后，在训练模型的同时，我们要验证这个模型是否真的很好。我们希望在训练结束时测试这个模型是否能提供我们想要的输出结果。剧透（其实也不算剧透），训练模型的计算成本非常高。任何微小的低效都会带来巨大的成本。正如我们稍后将看到的，特别是对于像LLM这样的大型模型，低效的训练可能会让你付出数百万美元的代价。")]),_._v(" "),v("p",[_._v("在第2部分中，我们将再次详细讨论训练模型所面临的挑战。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-3-推理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-推理"}},[_._v("#")]),_._v(" 1.2.3 推理")]),_._v(" "),v("p",[_._v("机器学习管道的第三步是推理，也就是使用模型。当我使用ChatGPT并得到回应时，模型正在执行推理。如果我用脸部解锁iPhone，脸部ID模型会识别我的脸并打开手机。该模型执行了推理。数据已经有了，模型已经训练好了，现在模型训练好了，我们就可以使用它，使用它就是推理。")]),_._v(" "),v("p",[_._v("严格来说，推理与网络在训练阶段做出的预测是一回事。回想一下，一个数据点通过网络，然后进行预测。然后根据预测的质量更新模型参数。推理的工作原理与此相同。因此，与训练相比，推理的计算成本非常低。训练LLaMa可能要花费数千万美元，但推理一次只需几分之一。与训练相比，计算成本更低。训练 LLaMa可能要花费数千万美元，但进行一次推理只需几分之一。")]),_._v(" "),v("blockquote",[v("p",[_._v("与训练相比，进行推理的成本很低，而且更容易并行化，这可能为小型闲置计算（如笔记本电脑和手机）提供了机会。")])]),_._v(" "),v("p",[_._v("推理过程有几个步骤。首先，在实际生产中使用之前，我们需要对其进行测试。我们对训练阶段未见的数据进行推理，以验证模型的质量。其次，当我们部署一个模型时，会有一些硬件和软件要求。例如，如果我的iPhone上有人脸识别模型，那么该模型就可以放在苹果公司的服务器上。然而，这样做非常不方便，因为现在每次我想解锁手机时，都必须访问互联网并向苹果服务器发送请求，然后在该模型上进行推理。然而，如果想在任意时刻使用这种技术，进行人脸识别的模型就必须存在于你的手机上，这意味着该模型必须与你iPhone上的硬件类型兼容。")]),_._v(" "),v("p",[_._v("最后，在实践中，我们还必须维护这一模式。我们必须不断进行调整。我们训练和使用的模型并不总是完美的。硬件要求和软件要求也在不断变化。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-4-机器学习管道是迭代式的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-机器学习管道是迭代式的"}},[_._v("#")]),_._v(" 1.2.4 机器学习管道是迭代式的")]),_._v(" "),v("p",[_._v("到目前为止，我把这个管道设计成了依次进行的三个步骤。你获取数据，处理数据，清理数据，一切都很顺利，然后你训练模型，模型训练完成后，你进行推理。这就是机器学习在实践中的美好图景。实际上，机器学习需要进行大量的迭代。因此，它不是一个链条，而是如下图所示的几个循环。")]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu29.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 31：机器学习流水线可以形象地理解为由数据、训练和推理三个步骤组成的链条。不过，在实践中，这一过程的迭代性更强，如蓝色箭头所示。")]),_._v(" "),v("p",[_._v("为了理解这一点，我们可以举几个例子。例如，我们可能会收集一个模型的数据，然后尝试对其进行训练。在训练的过程中，我们会发现我们需要的数据量应该更多。这意味着我们必须暂停训练，回到数据步骤并获取更多数据。我们可能需要重新处理数据，或者进行某种形式的数据扩增。数据扩增就像是给数据改头换面，从老一套中创造出新的面貌。想象一下，你有一本相册，你想让它变得更有趣。你把每张照片都复制了几份，但在每份副本中，你都做了一些小改动--也许你旋转了一张照片，放大了另一张照片，或者改变了另一张照片的光线。现在，你的相册有了更多的变化，但实际上你并没有拍摄任何新照片。例如，如果你正在训练一个模特识别狗，你可能会水平翻转每张照片，然后把它也提供给模特。或者，我们改变照片中狗的姿势，如下图所示。就模型而言，这增加了数据集，但我们并没有到现实世界中去收集更多数据。")]),_._v(" "),v("blockquote",[v("p",[_._v("使用合成数据来训练机器学习模型可能会导致许多问题，因此能够证明数据的真实性在未来可能变得至关重要。")])]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu30.png",alt:""}})]),_._v(" "),v("center",[_._v("图 32：数据增强示例。对原始数据点进行多点扩增，无需到世界各地收集更多独特的数据点 ")]),_._v(" "),v("p",[_._v("迭代的第二个更明显的例子是，当我们实际训练了一个模型，然后将其用于实践，即进行推理时，我们可能会发现模型在实践中表现不佳或存在偏差。这意味着我们必须停止推理过程，返回并重新训练模型，以解决这些问题，如偏差和证明。")]),_._v(" "),v("p",[_._v('第三个也是非常常见的步骤是，一旦我们在实践中使用模型（进行推理），我们最终会对数据步骤进行修改，因为推理本身会产生新的数据。例如，想象一下建立一个垃圾邮件过滤器。首先，我们要收集数据。本例中的数据是一组垃圾邮件和非垃圾邮件。当模型经过训练并用于实践时，我的收件箱中可能会收到一封垃圾邮件，这意味着模型犯了一个错误。它没有把它归类为垃圾邮件，但它就是垃圾邮件。因此，当 Gmail用户选择 "这封邮件属于垃圾邮件 "时，就会产生一个新的数据点。之后，所有这些新数据点都会进入数据步骤，然后我们可以通过多做一些训练来提高模型的性能。')]),_._v(" "),v("p",[_._v("另一个例子是，想象一个人工智能在下棋。我们训练人工智能下棋所需的数据是大量棋局，以及谁赢谁输的结果。但当这个模型用于实际下棋时，就会为人工智能生成更多的数据。这意味着，我们可以从推理步骤回到数据，利用这些新的数据点再次改进我的模型。这种推理和数据相连的想法适用于很多场合。")]),_._v(" "),v("p",[_._v('本节旨在让你对机器学习模型的构建过程有一个高层次的了解，这个过程是非常反复的。它不像 "哦，我们只需获取数据，一次尝试就能训练出一个模型，然后将其投入生产"。')]),_._v(" "),v("blockquote",[v("p",[_._v("模型是不断更新的，因此"),v("em",[_._v("不变的记录")]),_._v("可能会给设计带来挑战。")])]),_._v(" "),v("h2",{attrs:{id:"_1-3-机器学习的类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-机器学习的类型"}},[_._v("#")]),_._v(" 1.3 机器学习的类型")]),_._v(" "),v("p",[_._v("我们将介绍三种主要的机器学习模型。")]),_._v(" "),v("ul",[v("li",[_._v('监督学习："老师，教我方法"')]),_._v(" "),v("li",[_._v('无监督学习："只需找到隐藏的模式“')]),_._v(" "),v("li",[_._v('强化学习："试一试，看什么有效"')])]),_._v(" "),v("h3",{attrs:{id:"_1-3-1-监督学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-监督学习"}},[_._v("#")]),_._v(" 1.3.1 监督学习")]),_._v(" "),v("p",[_._v('"老师，教我方法"')]),_._v(" "),v("p",[_._v("想象一下，你正在教孩子区分猫和狗。你（对一切都了如指掌的老师）给他们看很多猫和狗的图片，每次都告诉他们哪个是哪个。最终，孩子们学会了自己辨别。这几乎就是机器学习中监督学习的工作原理。")]),_._v(" "),v("p",[_._v("在监督学习中，我们有大量的数据（比如猫和狗的图片），而且我们已经知道答案（老师告诉他们哪个是狗，哪个是猫）。我们利用这些数据来训练一个模型。该模型会查看许多示例，并有效地学习模仿老师。")]),_._v(" "),v("p",[_._v('在这个例子中，每张图片都是一个原始数据点。答案（狗或猫）被称为"标签"。因此，这是一个标签数据集。每个数据点都包含一张原始图片和一个标签。')]),_._v(" "),v("p",[_._v("这种方法概念简单，功能强大。在医疗诊断、自动驾驶汽车和股票价格预测中，使用监督学习模型的应用很多。")]),_._v(" "),v("p",[_._v("这种方法概念简单，功能强大。在医疗诊断、自动驾驶汽车和股票价格预测中，使用监督学习模型的应用很多。")]),_._v(" "),v("p",[_._v("然而，可以想象，这种方法面临着许多挑战。例如，我们不仅需要获取大量数据，还需要标签。这可能非常昂贵。"),v("a",{attrs:{href:"http://Scale.ai/",target:"_blank",rel:"noopener noreferrer"}},[_._v("Scale.ai"),v("OutboundLink")],1),_._v("等公司在这方面提供了有价值的服务。数据标注对稳健性提出了许多挑战。给数据贴标签的人可能会犯错，或者只是对标签有不同意见。从人类收集的所有标签中，有 20% 无法使用的情况并不少见。")]),_._v(" "),v("blockquote",[v("p",[_._v("激励机制和其他博弈论动态可能有助于提高开放数据集的质量。")])]),_._v(" "),v("h3",{attrs:{id:"_1-3-2-无监督学习-unsupervised-learning-usl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-无监督学习-unsupervised-learning-usl"}},[_._v("#")]),_._v(" 1.3.2 无监督学习（Unsupervised Learning, USL）")]),_._v(" "),v("p",[_._v('"只需找到隐藏的模式"')]),_._v(" "),v("p",[_._v("想象一下，你有一个装满各种水果的大篮子，但你并不熟悉所有的水果。你开始根据它们的外观、大小、颜色、质地甚至气味将它们分类。你不太清楚每种水果的名称，但你注意到有些水果彼此相似。也就是说，你在数据中发现了一些规律。")]),_._v(" "),v("p",[_._v("这种情况类似于机器学习中的无监督学习。在无监督学习中，我们会给模型一堆数据（比如各种水果的组合），但我们不会告诉模型每个数据是什么（我们不会给水果贴标签）。然后，模型会检查所有这些数据，并试图自己找出模式或分组。它可能会根据水果的颜色、形状、大小或任何其他它认为相关的特征进行分组。然而，模型找到的特征并不总是相关的。这就导致了许多问题，我们将在第 2 章中看到。")]),_._v(" "),v("p",[_._v("例如，模型最终可能会将香蕉和大蕉归为一组，因为它们都是长条形且呈黄色，而苹果和西红柿可能会被归为另一组，因为它们都是圆形且可能是红色。这里的关键在于，模型是在没有任何先验知识或标签的情况下找出这些分组的--它是从数据本身学习的，就像你根据可观察到的特征将未知水果分到不同的组中一样。")]),_._v(" "),v("p",[_._v("无监督学习是许多流行的机器学习模型的支柱，例如大型语言模型（LLM）。ChatGPT不需要人类通过提供标签来教它如何说每个句子。它只需分析语言数据中的模式，并学会预测下一个单词。")]),_._v(" "),v("p",[_._v("许多其他强大的生成式人工智能模型都依赖于无监督学习。例如，GAN（生成对抗网络）可用于生成人脸（即使这个人并不存在）。参见 "),v("a",{attrs:{href:"https://thispersondoesnotexist.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://thispersondoesnotexist.com/"),v("OutboundLink")],1)]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu31.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 33：人工智能生成的图像来自 https://thispersondoesnotexist.com")]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu32.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图 34：第二张人工智能生成的图片来自 https://thispersondoesnotexis t.com")]),_._v(" "),v("p",[_._v('上面的图片是人工智能生成的。我们并没有教这个模型"什么是人脸"。它是在大量人脸的基础上训练出来的，通过巧妙的架构，我们可以利用这个模型生成看似真实的人脸。请注意，随着生成式人工智能的兴起和模型的改进，对内容进行验证变得越来越困难。')]),_._v(" "),v("blockquote",[v("p",[_._v("加密解决方案可以让我们追踪内容的来源，并以可扩展的方式让我们安全地使用生成式人工智能。")])]),_._v(" "),v("h3",{attrs:{id:"_1-3-3-强化学习-reinforcement-learning-rl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-强化学习-reinforcement-learning-rl"}},[_._v("#")]),_._v(" 1.3.3 强化学习 (Reinforcement Learning, RL)")]),_._v(" "),v("p",[_._v('"试一试，看什么有效 "或 "从试验和错误中学习"')]),_._v(" "),v("p",[_._v("想象一下，您正在教一只狗做一个新的动作，比如捡球。每当狗狗做出接近你想要的动作时，比如跑向球或捡起球，你就给它点心吃。如果狗狗做了与此无关的事情，比如朝相反的方向跑，它就得不到食物。渐渐地，狗狗发现捡到球就能得到美味的食物，所以它就会一直这样做。这基本上就是机器学习领域中的强化学习（RL）。")]),_._v(" "),v("p",[_._v("在RL中，你有一个计算机程序或代理（如狗），它通过尝试不同的事情（如狗尝试不同的动作）来学习决策。如果代理做出了好的行为（比如捡球），它就会得到奖励（食物）；如果做出了不好的行为，它就得不到奖励。随着时间的推移，代理会学会多做能获得奖励的好事，少做不能获得奖励的坏事。从形式上看，这就是最大化奖励函数。")]),_._v(" "),v("p",[_._v("最酷的地方在于：代理会自己通过试错找出这一切。现在，如果我们想构建一个人工智能来下棋，那么人工智能最初可以随意尝试走棋。如果最终赢得了比赛，人工智能就会得到奖励。然后，该模型就会学会走更多的胜棋。")]),_._v(" "),v("p",[_._v("这可以应用于许多问题，尤其是需要连续决策的问题。例如，RL方法可用于机器人与控制、国际象棋或围棋（如 AlphaGo）以及算法交易。")]),_._v(" "),v("p",[_._v('RL方法面临许多挑战。其一，代理可能需要很长时间才能"学会"有意义的策略。这对于学习下棋的人工智能来说是可以接受的。但是，当人工智能开始采取随机行动来观察哪些行动有效时，你会把你的个人资金投入到人工智能算法交易中吗？或者说，如果机器人一开始会采取随机行动，你会允许它住在你家吗？')]),_._v(" "),v("center",[v("img",{attrs:{src:"/assets/ai-c-tu33.jpg",alt:""}})]),_._v(" "),v("center",[_._v("图35：这是一些强化学习代理在训练过程中的视频：一个[真正的机器人](https://www.youtube.com/watch?v=n2gE7n11h1Y)和一个[模拟机器人](https://www.youtube.com/watch?v=hx_bgoTF7bs) ")]),_._v(" "),v("p",[_._v("以下是每种机器学习的应用实例简述：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("学习类型")]),_._v(" "),v("th",[_._v("应用")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("监督学习")]),_._v(" "),v("td",[_._v("垃圾邮件检测、图像分类、语音识别、股票价格预测、医疗诊断、情感分析和天气预报")])]),_._v(" "),v("tr",[v("td",[_._v("无监督学习")]),_._v(" "),v("td",[_._v("客户细分、异常检测、社交网络分析、组织大型信息数据库、自然语言处理和推荐系统")])]),_._v(" "),v("tr",[v("td",[_._v("强化学习")]),_._v(" "),v("td",[_._v("自动驾驶汽车、机器人控制、机器下棋或围棋、算法交易、推荐系统以及文本摘要等自然语言处理任务")])])])])],1)}),[],!1,null,null,null);v.default=a.exports}}]);