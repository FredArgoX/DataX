function renderAlgorithm(linkId, htmlPath, pyPath, codeId, projectId, projectUrl) {
    const link = document.getElementById(linkId);
    const container = document.querySelector(".code-container");
    
    link.addEventListener("click", (event) => {
        event.preventDefault();
        container.innerHTML = ""; // Clear content first

        fetch(htmlPath)
            .then(response => response.ok ? response.text() : Promise.reject("Failed to load HTML"))
            .then(data => {
                container.innerHTML = data;
                return fetch(pyPath);
            })
            .then(response => response.ok ? response.text() : Promise.reject("Failed to load Python"))
            .then(code => {
                const codeElement = document.getElementById(codeId);
                if (codeElement) {
                    codeElement.textContent = code;
                    Prism?.highlightAll();
                }
                setupCopyButton(codeId);
                setupProjectButton(projectId, projectUrl);

                // Scroll to mn3 div after content is fully rendered
                const targetDiv = document.getElementById("mn3");
                if (targetDiv) {
                    targetDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            })
            .catch(error => {
                console.error(`Error loading ${htmlPath}:`, error);
                container.innerHTML = "<p>Error loading content. Please try again.</p>";
            });
    });
}

function setupCopyButton(codeId) {
    const copyButton = document.querySelector(".copy-btn");
    const codeElement = document.getElementById(codeId);
    if (copyButton && codeElement) {
        const newButton = copyButton.cloneNode(true);
        copyButton.parentNode.replaceChild(newButton, copyButton);
        
        newButton.addEventListener("click", () => {
            navigator.clipboard.writeText(codeElement.textContent)
                .then(() => {
                    newButton.innerHTML = "Copied";
                    newButton.classList.add("Bluer");
                    setTimeout(() => {
                        newButton.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                            viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="2" 
                            stroke-linecap="round" stroke-linejoin="round" class="icon">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"/>
                            </svg>`;
                    }, 1500);
                })
                .catch(err => console.error("Copy failed", err));
        });
    }
}

function setupProjectButton(projectId, url) {
    const projectBTN = document.getElementById(projectId);
    if (projectBTN) {
        const newButton = projectBTN.cloneNode(true);
        projectBTN.parentNode.replaceChild(newButton, projectBTN);
        newButton.addEventListener("click", () => window.open(url, "_blank"));
    }
}

// renderAlgorithm(linkId,    htmlPath,                       pyPath,                          codeId,            projectId,            projectUrl)
renderAlgorithm("LinRegresn", "./algorithms/LinRegresn.html", "./python_guides/LinRegresn.py", "LinRegresn-code", "LinRegresn-project", "https://www.google.com");
renderAlgorithm("RidgRegres", "./algorithms/RidgRegres.html", "./python_guides/RidgRegres.py", "RidgRegres-code", "RidgRegres-project", "https://www.google.com");
renderAlgorithm("LassRegres", "./algorithms/LassRegres.html", "./python_guides/LassRegres.py", "LassRegres-code", "LassRegres-project", "https://www.google.com");
renderAlgorithm("ElasNetReg", "./algorithms/ElasNetReg.html", "./python_guides/ElasNetReg.py", "ElasNetReg-code", "ElasNetReg-project", "https://www.google.com");
renderAlgorithm("PolyRegres", "./algorithms/PolyRegres.html", "./python_guides/PolyRegres.py", "PolyRegres-code", "PolyRegres-project", "https://www.google.com");
renderAlgorithm("SupVecRegr", "./algorithms/SupVecRegr.html", "./python_guides/SupVecRegr.py", "SupVecRegr-code", "SupVecRegr-project", "https://www.google.com");
renderAlgorithm("DecTreRegr", "./algorithms/DecTreRegr.html", "./python_guides/DecTreRegr.py", "DecTreRegr-code", "DecTreRegr-project", "https://www.google.com");
renderAlgorithm("RanForRegr", "./algorithms/RanForRegr.html", "./python_guides/RanForRegr.py", "RanForRegr-code", "RanForRegr-project", "https://www.google.com");
renderAlgorithm("GradBooReg", "./algorithms/GradBooReg.html", "./python_guides/GradBooReg.py", "GradBooReg-code", "GradBooReg-project", "https://www.google.com");
renderAlgorithm("LogiRegres", "./algorithms/LogiRegres.html", "./python_guides/LogiRegres.py", "LogiRegres-code", "LogiRegres-project", "https://www.google.com");
renderAlgorithm("kNearNeigh", "./algorithms/kNearNeigh.html", "./python_guides/kNearNeigh.py", "kNearNeigh-code", "kNearNeigh-project", "https://www.google.com");
renderAlgorithm("DecisTrees", "./algorithms/DecisTrees.html", "./python_guides/DecisTrees.py", "DecisTrees-code", "DecisTrees-project", "https://www.google.com");
renderAlgorithm("RanForClas", "./algorithms/RanForClas.html", "./python_guides/RanForClas.py", "RanForClas-code", "RanForClas-project", "https://www.google.com");
renderAlgorithm("SupVecMach", "./algorithms/SupVecMach.html", "./python_guides/SupVecMach.py", "SupVecMach-code", "SupVecMach-project", "https://www.google.com");
renderAlgorithm("NaivBayesM", "./algorithms/NaivBayesM.html", "./python_guides/NaivBayesM.py", "NaivBayesM-code", "NaivBayesM-project", "https://www.google.com");
renderAlgorithm("GradBooCla", "./algorithms/GradBooCla.html", "./python_guides/GradBooCla.py", "GradBooCla-code", "GradBooCla-project", "https://www.google.com");
renderAlgorithm("ArtNeuNetw", "./algorithms/ArtNeuNetw.html", "./python_guides/ArtNeuNetw.py", "ArtNeuNetw-code", "ArtNeuNetw-project", "https://www.google.com");
renderAlgorithm("kMeanClust", "./algorithms/kMeanClust.html", "./python_guides/kMeanClust.py", "kMeanClust-code", "kMeanClust-project", "https://www.google.com");
renderAlgorithm("HierClustr", "./algorithms/HierClustr.html", "./python_guides/HierClustr.py", "HierClustr-code", "HierClustr-project", "https://www.google.com");
renderAlgorithm("DBSCANClus", "./algorithms/DBSCANClus.html", "./python_guides/DBSCANClus.py", "DBSCANClus-code", "DBSCANClus-project", "https://www.google.com");
renderAlgorithm("GausMixMod", "./algorithms/GausMixMod.html", "./python_guides/GausMixMod.py", "GausMixMod-code", "GausMixMod-project", "https://www.google.com");
renderAlgorithm("MeanShfClu", "./algorithms/MeanShfClu.html", "./python_guides/MeanShfClu.py", "MeanShfClu-code", "MeanShfClu-project", "https://www.google.com");
renderAlgorithm("PrinCompAn", "./algorithms/PrinCompAn.html", "./python_guides/PrinCompAn.py", "PrinCompAn-code", "PrinCompAn-project", "https://www.google.com");
renderAlgorithm("tSNEAnalys", "./algorithms/tSNEAnalys.html", "./python_guides/tSNEAnalys.py", "tSNEAnalys-code", "tSNEAnalys-project", "https://www.google.com");
renderAlgorithm("UMAPAnalys", "./algorithms/UMAPAnalys.html", "./python_guides/UMAPAnalys.py", "UMAPAnalys-code", "UMAPAnalys-project", "https://www.google.com");
renderAlgorithm("SingValDec", "./algorithms/SingValDec.html", "./python_guides/SingValDec.py", "SingValDec-code", "SingValDec-project", "https://www.google.com");
renderAlgorithm("IndCompAna", "./algorithms/IndCompAna.html", "./python_guides/IndCompAna.py", "IndCompAna-code", "IndCompAna-project", "https://www.google.com");
renderAlgorithm("Autoencode", "./algorithms/Autoencode.html", "./python_guides/Autoencode.py", "Autoencode-code", "Autoencode-project", "https://www.google.com");
renderAlgorithm("IsolForest", "./algorithms/IsolForest.html", "./python_guides/IsolForest.py", "IsolForest-code", "IsolForest-project", "https://www.google.com");
renderAlgorithm("OneClasSVM", "./algorithms/OneClasSVM.html", "./python_guides/OneClasSVM.py", "OneClasSVM-code", "OneClasSVM-project", "https://www.google.com");
renderAlgorithm("LocOutFact", "./algorithms/LocOutFact.html", "./python_guides/LocOutFact.py", "LocOutFact-code", "LocOutFact-project", "https://www.google.com");
renderAlgorithm("AutoAnoDet", "./algorithms/AutoAnoDet.html", "./python_guides/AutoAnoDet.py", "AutoAnoDet-code", "AutoAnoDet-project", "https://www.google.com");
renderAlgorithm("SelfTrainn", "./algorithms/SelfTrainn.html", "./python_guides/SelfTrainn.py", "SelfTrainn-code", "SelfTrainn-project", "https://www.google.com");
renderAlgorithm("CoTrainngg", "./algorithms/CoTrainngg.html", "./python_guides/CoTrainngg.py", "CoTrainngg-code", "CoTrainngg-project", "https://www.google.com");
renderAlgorithm("PseuLabeln", "./algorithms/PseuLabeln.html", "./python_guides/PseuLabeln.py", "PseuLabeln-code", "PseuLabeln-project", "https://www.google.com");
renderAlgorithm("GrapSemiSu", "./algorithms/GrapSemiSu.html", "./python_guides/GrapSemiSu.py", "GrapSemiSu-code", "GrapSemiSu-project", "https://www.google.com");
renderAlgorithm("QLearnning", "./algorithms/QLearnning.html", "./python_guides/QLearnning.py", "QLearnning-code", "QLearnning-project", "https://www.google.com");
renderAlgorithm("DeepQNetwk", "./algorithms/DeepQNetwk.html", "./python_guides/DeepQNetwk.py", "DeepQNetwk-code", "DeepQNetwk-project", "https://www.google.com");
renderAlgorithm("PolGradMet", "./algorithms/PolGradMet.html", "./python_guides/PolGradMet.py", "PolGradMet-code", "PolGradMet-project", "https://www.google.com");
renderAlgorithm("ActCriMeth", "./algorithms/ActCriMeth.html", "./python_guides/ActCriMeth.py", "ActCriMeth-code", "ActCriMeth-project", "https://www.google.com");
renderAlgorithm("DeepDetPol", "./algorithms/DeepDetPol.html", "./python_guides/DeepDetPol.py", "DeepDetPol-code", "DeepDetPol-project", "https://www.google.com");
renderAlgorithm("TrusRegPol", "./algorithms/TrusRegPol.html", "./python_guides/TrusRegPol.py", "TrusRegPol-code", "TrusRegPol-project", "https://www.google.com");
renderAlgorithm("MontCarMet", "./algorithms/MontCarMet.html", "./python_guides/MontCarMet.py", "MontCarMet-code", "MontCarMet-project", "https://www.google.com");
renderAlgorithm("MulAgeReLe", "./algorithms/MulAgeReLe.html", "./python_guides/MulAgeReLe.py", "MulAgeReLe-code", "MulAgeReLe-project", "https://www.google.com");
renderAlgorithm("FeedNeuNet", "./algorithms/FeedNeuNet.html", "./python_guides/FeedNeuNet.py", "FeedNeuNet-code", "FeedNeuNet-project", "https://www.google.com");
renderAlgorithm("ConvNeuNet", "./algorithms/ConvNeuNet.html", "./python_guides/ConvNeuNet.py", "ConvNeuNet-code", "ConvNeuNet-project", "https://www.google.com");
renderAlgorithm("RecuNeuNet", "./algorithms/RecuNeuNet.html", "./python_guides/RecuNeuNet.py", "RecuNeuNet-code", "RecuNeuNet-project", "https://www.google.com");
renderAlgorithm("LongShoMem", "./algorithms/LongShoMem.html", "./python_guides/LongShoMem.py", "LongShoMem-code", "LongShoMem-project", "https://www.google.com");
renderAlgorithm("GateRecUni", "./algorithms/GateRecUni.html", "./python_guides/GateRecUni.py", "GateRecUni-code", "GateRecUni-project", "https://www.google.com");
renderAlgorithm("Transformr", "./algorithms/Transformr.html", "./python_guides/Transformr.py", "Transformr-code", "Transformr-project", "https://www.google.com");
renderAlgorithm("VarAutoEnc", "./algorithms/VarAutoEnc.html", "./python_guides/VarAutoEnc.py", "VarAutoEnc-code", "VarAutoEnc-project", "https://www.google.com");
renderAlgorithm("GenAdvNetw", "./algorithms/GenAdvNetw.html", "./python_guides/GenAdvNetw.py", "GenAdvNetw-code", "GenAdvNetw-project", "https://www.google.com");
renderAlgorithm("DiffModels", "./algorithms/DiffModels.html", "./python_guides/DiffModels.py", "DiffModels-code", "DiffModels-project", "https://www.google.com");
renderAlgorithm("GrapNeuNet", "./algorithms/GrapNeuNet.html", "./python_guides/GrapNeuNet.py", "GrapNeuNet-code", "GrapNeuNet-project", "https://www.google.com");
renderAlgorithm("GrapConNet", "./algorithms/GrapConNet.html", "./python_guides/GrapConNet.py", "GrapConNet-code", "GrapConNet-project", "https://www.google.com");
renderAlgorithm("GrapAttNet", "./algorithms/GrapAttNet.html", "./python_guides/GrapAttNet.py", "GrapAttNet-code", "GrapAttNet-project", "https://www.google.com");
renderAlgorithm("BagginMeth", "./algorithms/BagginMeth.html", "./python_guides/BagginMeth.py", "BagginMeth-code", "BagginMeth-project", "https://www.google.com");
renderAlgorithm("BoostMethd", "./algorithms/BoostMethd.html", "./python_guides/BoostMethd.py", "BoostMethd-code", "BoostMethd-project", "https://www.google.com");
renderAlgorithm("Stackinggg", "./algorithms/Stackinggg.html", "./python_guides/Stackinggg.py", "Stackinggg-code", "Stackinggg-project", "https://www.google.com");
renderAlgorithm("Blendinggg", "./algorithms/Blendinggg.html", "./python_guides/Blendinggg.py", "Blendinggg-code", "Blendinggg-project", "https://www.google.com");
renderAlgorithm("NeuArcSear", "./algorithms/NeuArcSear.html", "./python_guides/NeuArcSear.py", "NeuArcSear-code", "NeuArcSear-project", "https://www.google.com");
renderAlgorithm("BayeOptimi", "./algorithms/BayeOptimi.html", "./python_guides/BayeOptimi.py", "BayeOptimi-code", "BayeOptimi-project", "https://www.google.com");
renderAlgorithm("HypParTune", "./algorithms/HypParTune.html", "./python_guides/HypParTune.py", "HypParTune-code", "HypParTune-project", "https://www.google.com");
renderAlgorithm("AutoMLFram", "./algorithms/AutoMLFram.html", "./python_guides/AutoMLFram.py", "AutoMLFram-code", "AutoMLFram-project", "https://www.google.com");
renderAlgorithm("SecAggMeth", "./algorithms/SecAggMeth.html", "./python_guides/SecAggMeth.py", "SecAggMeth-code", "SecAggMeth-project", "https://www.google.com");
renderAlgorithm("FedAveragg", "./algorithms/FedAveragg.html", "./python_guides/FedAveragg.py", "FedAveragg-code", "FedAveragg-project", "https://www.google.com");
renderAlgorithm("DifPriTech", "./algorithms/DifPriTech.html", "./python_guides/DifPriTech.py", "DifPriTech-code", "DifPriTech-project", "https://www.google.com");
renderAlgorithm("ARIMAModel", "./algorithms/ARIMAModel.html", "./python_guides/ARIMAModel.py", "ARIMAModel-code", "ARIMAModel-project", "https://www.google.com");
renderAlgorithm("SARIMAModl", "./algorithms/SARIMAModl.html", "./python_guides/SARIMAModl.py", "SARIMAModl-code", "SARIMAModl-project", "https://www.google.com");
renderAlgorithm("ProphetMod", "./algorithms/ProphetMod.html", "./python_guides/ProphetMod.py", "ProphetMod-code", "ProphetMod-project", "https://www.google.com");
renderAlgorithm("LSTMTimeSe", "./algorithms/LSTMTimeSe.html", "./python_guides/LSTMTimeSe.py", "LSTMTimeSe-code", "LSTMTimeSe-project", "https://www.google.com");
renderAlgorithm("TempConNet", "./algorithms/TempConNet.html", "./python_guides/TempConNet.py", "TempConNet-code", "TempConNet-project", "https://www.google.com");
renderAlgorithm("TranTimSer", "./algorithms/TranTimSer.html", "./python_guides/TranTimSer.py", "TranTimSer-code", "TranTimSer-project", "https://www.google.com");
renderAlgorithm("WordEmbedd", "./algorithms/WordEmbedd.html", "./python_guides/WordEmbedd.py", "WordEmbedd-code", "WordEmbedd-project", "https://www.google.com");
renderAlgorithm("Transfrmrs", "./algorithms/Transfrmrs.html", "./python_guides/Transfrmrs.py", "Transfrmrs-code", "Transfrmrs-project", "https://www.google.com");
renderAlgorithm("TextClaSen", "./algorithms/TextClaSen.html", "./python_guides/TextClaSen.py", "TextClaSen-code", "TextClaSen-project", "https://www.google.com");
renderAlgorithm("NamEntRecg", "./algorithms/NamEntRecg.html", "./python_guides/NamEntRecg.py", "NamEntRecg-code", "NamEntRecg-project", "https://www.google.com");
renderAlgorithm("TopiModeln", "./algorithms/TopiModeln.html", "./python_guides/TopiModeln.py", "TopiModeln-code", "TopiModeln-project", "https://www.google.com");
renderAlgorithm("Seq2SeqMod", "./algorithms/Seq2SeqMod.html", "./python_guides/Seq2SeqMod.py", "Seq2SeqMod-code", "Seq2SeqMod-project", "https://www.google.com");
renderAlgorithm("ImagClasif", "./algorithms/ImagClasif.html", "./python_guides/ImagClasif.py", "ImagClasif-code", "ImagClasif-project", "https://www.google.com");
renderAlgorithm("ObjDetectn", "./algorithms/ObjDetectn.html", "./python_guides/ObjDetectn.py", "ObjDetectn-code", "ObjDetectn-project", "https://www.google.com");
renderAlgorithm("ImagSegmen", "./algorithms/ImagSegmen.html", "./python_guides/ImagSegmen.py", "ImagSegmen-code", "ImagSegmen-project", "https://www.google.com");
renderAlgorithm("ImagGenrat", "./algorithms/ImagGenrat.html", "./python_guides/ImagGenrat.py", "ImagGenrat-code", "ImagGenrat-project", "https://www.google.com");
