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
                //
                // Trigger MathJax rendering
                if(window.MathJax){
                    MathJax.typesetPromise()
                    .then(() => console.log("MathJax rendered"))
                    .catch((err) => console.log("MathJax render failed"))
                }
                //
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
renderAlgorithm("LinRegresn", "./algorithms/LinRegresn.html", "./python_guides/LinRegresn.py", "LinRegresn-code", "LinRegresn-project", "https://colab.research.google.com/drive/1LcVJRKxG1j-47BMbJtxZ5WgtuBTG3ZO5#scrollTo=7tIS5NUEORAb");
renderAlgorithm("RidgRegres", "./algorithms/RidgRegres.html", "./python_guides/RidgRegres.py", "RidgRegres-code", "RidgRegres-project", "https://colab.research.google.com/drive/1_LVsARxnqqyJLaUBp3LYQV8A9zE9mWZz#scrollTo=ZddCSXCAOiMI");
renderAlgorithm("LassRegres", "./algorithms/LassRegres.html", "./python_guides/LassRegres.py", "LassRegres-code", "LassRegres-project", "https://colab.research.google.com/drive/1e57P_GxfRSdSXscoM_Yb0P0sppgXblUy#scrollTo=Ji-bMVkgPM6H");
renderAlgorithm("ElasNetReg", "./algorithms/ElasNetReg.html", "./python_guides/ElasNetReg.py", "ElasNetReg-code", "ElasNetReg-project", "https://colab.research.google.com/drive/1OFiYGhy0jCqB3dPM-cGu7V5demAn0arB#scrollTo=JtmJRECfPcTz");
renderAlgorithm("PolyRegres", "./algorithms/PolyRegres.html", "./python_guides/PolyRegres.py", "PolyRegres-code", "PolyRegres-project", "https://colab.research.google.com/drive/1wedrNgTk0mi6d01gKl7c_-GQRa2U2ZQY#scrollTo=iDCU9i79PiVw");
renderAlgorithm("SupVecRegr", "./algorithms/SupVecRegr.html", "./python_guides/SupVecRegr.py", "SupVecRegr-code", "SupVecRegr-project", "https://colab.research.google.com/drive/1bUP8uZrva6wV5FSUZiBIKTOCSa6mHmQT#scrollTo=klq8UTVJPozY");
renderAlgorithm("DecTreRegr", "./algorithms/DecTreRegr.html", "./python_guides/DecTreRegr.py", "DecTreRegr-code", "DecTreRegr-project", "https://colab.research.google.com/drive/1J1fGsv3GF6x_Ln6A8kyetGzglQoq-E1S#scrollTo=LP3QppvHPvCg");
renderAlgorithm("RanForRegr", "./algorithms/RanForRegr.html", "./python_guides/RanForRegr.py", "RanForRegr-code", "RanForRegr-project", "https://colab.research.google.com/drive/11SQQus8QLgP8tC9LfSzLJ5OdhJtKD06O#scrollTo=rQPPoAqzP1Wm");
renderAlgorithm("GradBooReg", "./algorithms/GradBooReg.html", "./python_guides/GradBooReg.py", "GradBooReg-code", "GradBooReg-project", "https://colab.research.google.com/drive/1eczCtEGMo62h2YLSlTlhZdy_24iWW-V0#scrollTo=Fmq5wRZ5P6vJ");
renderAlgorithm("LogiRegres", "./algorithms/LogiRegres.html", "./python_guides/LogiRegres.py", "LogiRegres-code", "LogiRegres-project", "https://colab.research.google.com/drive/1plrla7aUzCOtbR4aL80LOrORUoas5fTF#scrollTo=lECj_mElP_mg");
renderAlgorithm("kNearNeigh", "./algorithms/kNearNeigh.html", "./python_guides/kNearNeigh.py", "kNearNeigh-code", "kNearNeigh-project", "https://colab.research.google.com/drive/1MgWORZf5OYo4wXa_0GOlztKpx0TZJ4C7#scrollTo=G9yRFsTIQDzF");
renderAlgorithm("DecisTrees", "./algorithms/DecisTrees.html", "./python_guides/DecisTrees.py", "DecisTrees-code", "DecisTrees-project", "https://colab.research.google.com/drive/1tg45aOyMTfI8Z5m_5yZBpkZAB4wW3rdr#scrollTo=G8dx71YdQJ5A");
renderAlgorithm("RanForClas", "./algorithms/RanForClas.html", "./python_guides/RanForClas.py", "RanForClas-code", "RanForClas-project", "https://colab.research.google.com/drive/1Ti8Xt4hX_IQYpIJh48PViWwCwGdq5PGZ#scrollTo=jJeCEREDQoDb");
renderAlgorithm("SupVecMach", "./algorithms/SupVecMach.html", "./python_guides/SupVecMach.py", "SupVecMach-code", "SupVecMach-project", "https://colab.research.google.com/drive/1JHJlX0qI_aSWgJWBfEDBu1wrJ5GHDwsK#scrollTo=LTM7pMnRQtFU");
renderAlgorithm("NaivBayesM", "./algorithms/NaivBayesM.html", "./python_guides/NaivBayesM.py", "NaivBayesM-code", "NaivBayesM-project", "https://colab.research.google.com/drive/1ltfyWuCXAkroSSZ6ZuG8s_VnQRyu2cZi#scrollTo=iLR8EL4wQyaB");
renderAlgorithm("GradBooCla", "./algorithms/GradBooCla.html", "./python_guides/GradBooCla.py", "GradBooCla-code", "GradBooCla-project", "https://colab.research.google.com/drive/1elFaqF3o9YjKK6nmhJ5AVli-gGkvp2WA#scrollTo=Z7iLzIZRQ3wr");
renderAlgorithm("ArtNeuNetw", "./algorithms/ArtNeuNetw.html", "./python_guides/ArtNeuNetw.py", "ArtNeuNetw-code", "ArtNeuNetw-project", "https://colab.research.google.com/drive/1PqVmacgBh9to6XjrqB3wedd6kq5ydynI#scrollTo=dDOclOXbQ8XY");
renderAlgorithm("kMeanClust", "./algorithms/kMeanClust.html", "./python_guides/kMeanClust.py", "kMeanClust-code", "kMeanClust-project", "https://colab.research.google.com/drive/1oyBd5LWP14hijZBIcyJmozmX6-hQh87n#scrollTo=HIb_kL2rRB-0");
renderAlgorithm("HierClustr", "./algorithms/HierClustr.html", "./python_guides/HierClustr.py", "HierClustr-code", "HierClustr-project", "https://colab.research.google.com/drive/1jKHefy-hkSzC7sHnvNicDFBxCCeCpEdL#scrollTo=q8h2KrJgRJV5");
renderAlgorithm("DBSCANClus", "./algorithms/DBSCANClus.html", "./python_guides/DBSCANClus.py", "DBSCANClus-code", "DBSCANClus-project", "https://colab.research.google.com/drive/1d0lgYV5rElc4ObyR9QV5zHVhgzWVoqSs#scrollTo=Vn7UXylyRP7M");
renderAlgorithm("GausMixMod", "./algorithms/GausMixMod.html", "./python_guides/GausMixMod.py", "GausMixMod-code", "GausMixMod-project", "https://colab.research.google.com/drive/1C_iakzuleOpkgD0PWpFCQvKgtVq1siHr#scrollTo=U6cMqnHkRcp-");
renderAlgorithm("MeanShfClu", "./algorithms/MeanShfClu.html", "./python_guides/MeanShfClu.py", "MeanShfClu-code", "MeanShfClu-project", "https://colab.research.google.com/drive/1JhFmvxen1E5rlx1pk5Rt7XOtNYLcRmzC#scrollTo=4mWPgjnLRi29");
renderAlgorithm("PrinCompAn", "./algorithms/PrinCompAn.html", "./python_guides/PrinCompAn.py", "PrinCompAn-code", "PrinCompAn-project", "https://colab.research.google.com/drive/1C4xCXWZ0Xe8iXGuPbE_NWLs0HkRvdij7#scrollTo=G499ru3ZRoeY");
renderAlgorithm("tSNEAnalys", "./algorithms/tSNEAnalys.html", "./python_guides/tSNEAnalys.py", "tSNEAnalys-code", "tSNEAnalys-project", "https://colab.research.google.com/drive/1qOsTBQPVWLDKfwYi2yp1nENN_CxteD6G#scrollTo=TUx2auOZRt8P");
renderAlgorithm("UMAPAnalys", "./algorithms/UMAPAnalys.html", "./python_guides/UMAPAnalys.py", "UMAPAnalys-code", "UMAPAnalys-project", "https://colab.research.google.com/drive/1Z8Q8PicMYQCSh4GGxCbrE2UM8jBF3z6f#scrollTo=htuJgWo4R10s");
renderAlgorithm("SingValDec", "./algorithms/SingValDec.html", "./python_guides/SingValDec.py", "SingValDec-code", "SingValDec-project", "https://colab.research.google.com/drive/1RXj3U-h5OAIeL3u2PJuWzguGaBrlmPaH#scrollTo=dEsH_zGIR6NP");
renderAlgorithm("IndCompAna", "./algorithms/IndCompAna.html", "./python_guides/IndCompAna.py", "IndCompAna-code", "IndCompAna-project", "https://colab.research.google.com/drive/1uwCDfUmow7t5XqJd0CKQYIseOMS-bntq#scrollTo=N6aW5C6LR-Y0");
renderAlgorithm("Autoencode", "./algorithms/Autoencode.html", "./python_guides/Autoencode.py", "Autoencode-code", "Autoencode-project", "https://colab.research.google.com/drive/17AMTeWHvVMNK3vgbzYWCOOnkUMwt7OG1#scrollTo=4a3o3KKPSCau");
renderAlgorithm("IsolForest", "./algorithms/IsolForest.html", "./python_guides/IsolForest.py", "IsolForest-code", "IsolForest-project", "https://colab.research.google.com/drive/1lC_S9iB1SWjpI66MMOGQpZCAN0zvRjHN#scrollTo=zfLCfFOqSGKM");
renderAlgorithm("OneClasSVM", "./algorithms/OneClasSVM.html", "./python_guides/OneClasSVM.py", "OneClasSVM-code", "OneClasSVM-project", "https://colab.research.google.com/drive/1Kp56lE9XEozQQKCpHPGqp9xigJDQZ1o_#scrollTo=9dUWBYZBSNbg");
renderAlgorithm("LocOutFact", "./algorithms/LocOutFact.html", "./python_guides/LocOutFact.py", "LocOutFact-code", "LocOutFact-project", "https://colab.research.google.com/drive/1AfTfY5X6Hqmeh1Bn2qz0P5eevdgNepc5#scrollTo=Kc11LfTkSRvE");
renderAlgorithm("AutoAnoDet", "./algorithms/AutoAnoDet.html", "./python_guides/AutoAnoDet.py", "AutoAnoDet-code", "AutoAnoDet-project", "https://colab.research.google.com/drive/1aTSNKgL3nkqQr4wDQ4W-XtzlCjvNTASo#scrollTo=0ig86_JUNukV");
renderAlgorithm("SelfTrainn", "./algorithms/SelfTrainn.html", "./python_guides/SelfTrainn.py", "SelfTrainn-code", "SelfTrainn-project", "https://colab.research.google.com/drive/1I73_y-7pQ6G0_mQa2lG1ybdOo8_cv2Zj#scrollTo=laYxEn5PSbwy");
renderAlgorithm("CoTrainngg", "./algorithms/CoTrainngg.html", "./python_guides/CoTrainngg.py", "CoTrainngg-code", "CoTrainngg-project", "https://colab.research.google.com/drive/1TKHuNO40SSUwZrbDqefFCTUYFB0FgSik#scrollTo=JVvk1VdHShFj");
renderAlgorithm("PseuLabeln", "./algorithms/PseuLabeln.html", "./python_guides/PseuLabeln.py", "PseuLabeln-code", "PseuLabeln-project", "https://colab.research.google.com/drive/1aIHgcb1G4lkxQVtqMJa8J5EV42bBevTk#scrollTo=aRWfR5x9SkQk");
renderAlgorithm("GrapSemiSu", "./algorithms/GrapSemiSu.html", "./python_guides/GrapSemiSu.py", "GrapSemiSu-code", "GrapSemiSu-project", "https://colab.research.google.com/drive/1v-8GHf9NjPilvuOh_rys-O1X8MQaN_h9#scrollTo=OnpPnFHGSpZA");
renderAlgorithm("QLearnning", "./algorithms/QLearnning.html", "./python_guides/QLearnning.py", "QLearnning-code", "QLearnning-project", "https://colab.research.google.com/drive/1dsDpDxBR7o6JR6-LvIVSIMLvH7hJ7cEN#scrollTo=fOKHHE9JSsjC");
renderAlgorithm("DeepQNetwk", "./algorithms/DeepQNetwk.html", "./python_guides/DeepQNetwk.py", "DeepQNetwk-code", "DeepQNetwk-project", "https://colab.research.google.com/drive/1OFHfglaN-2Sy9B4pa3iBAdXtV2Rc19Rs#scrollTo=2y93h-TESwFN");
renderAlgorithm("PolGradMet", "./algorithms/PolGradMet.html", "./python_guides/PolGradMet.py", "PolGradMet-code", "PolGradMet-project", "https://colab.research.google.com/drive/1RGeG5Pgb7brQcOeKEaDSXO9ZnK8-w0yX#scrollTo=_j2SabMZSzoi");
renderAlgorithm("ActCriMeth", "./algorithms/ActCriMeth.html", "./python_guides/ActCriMeth.py", "ActCriMeth-code", "ActCriMeth-project", "https://colab.research.google.com/drive/1kd1-wcPGebVTxh_BX5TwmNTkWLsKNP3n#scrollTo=tGc0-oMqOLN0");
renderAlgorithm("DeepDetPol", "./algorithms/DeepDetPol.html", "./python_guides/DeepDetPol.py", "DeepDetPol-code", "DeepDetPol-project", "https://colab.research.google.com/drive/1A7xQG1VIo-jSj-SrrXI5nyvw06oiUn4C#scrollTo=Ith_H81yS7N6");
renderAlgorithm("TrusRegPol", "./algorithms/TrusRegPol.html", "./python_guides/TrusRegPol.py", "TrusRegPol-code", "TrusRegPol-project", "https://colab.research.google.com/drive/1n_4AvoqHBVzgRt4g-AePnMSPqFx34NRR#scrollTo=f-6lGIcJS_O0");
renderAlgorithm("MontCarMet", "./algorithms/MontCarMet.html", "./python_guides/MontCarMet.py", "MontCarMet-code", "MontCarMet-project", "https://colab.research.google.com/drive/1yRwEHqLmGWmQe6brhZyMt9YrsAatLb_7#scrollTo=0jC8cNRBTDCY");
renderAlgorithm("MulAgeReLe", "./algorithms/MulAgeReLe.html", "./python_guides/MulAgeReLe.py", "MulAgeReLe-code", "MulAgeReLe-project", "https://colab.research.google.com/drive/1vrim5xpWpfMjoRmjay9cgFF7ZUr1oQgV#scrollTo=hfeNpZzsTGpo");
renderAlgorithm("FeedNeuNet", "./algorithms/FeedNeuNet.html", "./python_guides/FeedNeuNet.py", "FeedNeuNet-code", "FeedNeuNet-project", "https://colab.research.google.com/drive/19kEwsDOFftTGWkr2UHBDFce6p8y40vtM#scrollTo=dubJJBOkTQRp");
renderAlgorithm("ConvNeuNet", "./algorithms/ConvNeuNet.html", "./python_guides/ConvNeuNet.py", "ConvNeuNet-code", "ConvNeuNet-project", "https://colab.research.google.com/drive/1c-jtpVMELz85XtCzYCIl8jfup3b6Wcpf#scrollTo=q_3sAJiGTXwT");
renderAlgorithm("RecuNeuNet", "./algorithms/RecuNeuNet.html", "./python_guides/RecuNeuNet.py", "RecuNeuNet-code", "RecuNeuNet-project", "https://colab.research.google.com/drive/1oI1lwB59VFiEL8RXUgPRDsQKf-C8c4-H#scrollTo=QkKSBUxMTbLc");
renderAlgorithm("LongShoMem", "./algorithms/LongShoMem.html", "./python_guides/LongShoMem.py", "LongShoMem-code", "LongShoMem-project", "https://colab.research.google.com/drive/1SuNIzE-Ry0SmFVD8BbsH7QwoMmQeuUL-#scrollTo=lir7gnEcTe3a");
renderAlgorithm("GateRecUni", "./algorithms/GateRecUni.html", "./python_guides/GateRecUni.py", "GateRecUni-code", "GateRecUni-project", "https://colab.research.google.com/drive/1uHO26PwvBa93AmPUt7owBQO6QLIAz8l9#scrollTo=tCTswKa5TjK5");
renderAlgorithm("Transformr", "./algorithms/Transformr.html", "./python_guides/Transformr.py", "Transformr-code", "Transformr-project", "https://colab.research.google.com/drive/1G8nb9tmBfPPFKB9zWVYReXxijLnEmcI6#scrollTo=dV2Ks3SITnBb");
renderAlgorithm("VarAutoEnc", "./algorithms/VarAutoEnc.html", "./python_guides/VarAutoEnc.py", "VarAutoEnc-code", "VarAutoEnc-project", "https://colab.research.google.com/drive/12i0PyOgqoWuGfIWhmq1Qpg1oGAmmeHXT#scrollTo=g1RMbHJhTrAm");
renderAlgorithm("GenAdvNetw", "./algorithms/GenAdvNetw.html", "./python_guides/GenAdvNetw.py", "GenAdvNetw-code", "GenAdvNetw-project", "https://colab.research.google.com/drive/17thR5J9-qe7aJ8OvHkwZTbOIoPRpWKeT#scrollTo=yBqjynD4Tv61");
renderAlgorithm("DiffModels", "./algorithms/DiffModels.html", "./python_guides/DiffModels.py", "DiffModels-code", "DiffModels-project", "https://colab.research.google.com/drive/1nrhNxsIuEc2FyTum8ke2AIBp5SdNvnQV#scrollTo=owQP7M62T0oj");
renderAlgorithm("GrapNeuNet", "./algorithms/GrapNeuNet.html", "./python_guides/GrapNeuNet.py", "GrapNeuNet-code", "GrapNeuNet-project", "https://colab.research.google.com/drive/1aB5DgIGIpSoj126P3wbIlLsOdLRLNg3z#scrollTo=kbFs_X_FT4rb");
renderAlgorithm("GrapConNet", "./algorithms/GrapConNet.html", "./python_guides/GrapConNet.py", "GrapConNet-code", "GrapConNet-project", "https://colab.research.google.com/drive/1PNHyksEoP-bwnhCRK_5S-c83FwYfORxj#scrollTo=Xi1TrdbKT8WV");
renderAlgorithm("GrapAttNet", "./algorithms/GrapAttNet.html", "./python_guides/GrapAttNet.py", "GrapAttNet-code", "GrapAttNet-project", "https://colab.research.google.com/drive/1zFiIct12eL-TOcTxFUXW3ajUO9mWxRDT#scrollTo=r7Iev2rFT_yA");
renderAlgorithm("BagginMeth", "./algorithms/BagginMeth.html", "./python_guides/BagginMeth.py", "BagginMeth-code", "BagginMeth-project", "https://colab.research.google.com/drive/1voWYPwpvA6yk04UYqBnam-sybqFUHZib#scrollTo=sqChCR_wK6lo");
renderAlgorithm("BoostMethd", "./algorithms/BoostMethd.html", "./python_guides/BoostMethd.py", "BoostMethd-code", "BoostMethd-project", "https://colab.research.google.com/drive/1zedBQCz99Rh0-xbn-I90O4wFYxPwr1n0#scrollTo=F87HAPG9NfzK");
renderAlgorithm("Stackinggg", "./algorithms/Stackinggg.html", "./python_guides/Stackinggg.py", "Stackinggg-code", "Stackinggg-project", "https://colab.research.google.com/drive/19TyKb4wrYhEvpORHVpaU-anah0ejGos1#scrollTo=ZTNnuwypUKXJ");
renderAlgorithm("Blendinggg", "./algorithms/Blendinggg.html", "./python_guides/Blendinggg.py", "Blendinggg-code", "Blendinggg-project", "https://colab.research.google.com/drive/1dsufKbWjhueg5rKRTb-MpCf-76I9Khza#scrollTo=QkXJXi8fUN-_");
renderAlgorithm("NeuArcSear", "./algorithms/NeuArcSear.html", "./python_guides/NeuArcSear.py", "NeuArcSear-code", "NeuArcSear-project", "https://colab.research.google.com/drive/1xNbdprRbE2-VYgz3E2yZvLRa7dmJwBrB#scrollTo=RCQt7rSBUSp7");
renderAlgorithm("BayeOptimi", "./algorithms/BayeOptimi.html", "./python_guides/BayeOptimi.py", "BayeOptimi-code", "BayeOptimi-project", "https://colab.research.google.com/drive/1cLsGfRuCdoFXPT8buBVeVKxUBcvycfab#scrollTo=0dOOQS5LUWBS");
renderAlgorithm("HypParTune", "./algorithms/HypParTune.html", "./python_guides/HypParTune.py", "HypParTune-code", "HypParTune-project", "https://colab.research.google.com/drive/1HPYVQiM-zTlRvc7UNchnZS-F5IoKKHHk#scrollTo=UQgjwPa_UZ1L");
renderAlgorithm("AutoMLFram", "./algorithms/AutoMLFram.html", "./python_guides/AutoMLFram.py", "AutoMLFram-code", "AutoMLFram-project", "https://colab.research.google.com/drive/1GdW8PyEErV31VBVxBuAI26BWXWyxZhaR#scrollTo=_HKKaIdpUdll");
renderAlgorithm("SecAggMeth", "./algorithms/SecAggMeth.html", "./python_guides/SecAggMeth.py", "SecAggMeth-code", "SecAggMeth-project", "https://colab.research.google.com/drive/1e_bL1AJ35V_4Z6gQhVwlILND3KCoxro1#scrollTo=avV9XqNsUhRw");
renderAlgorithm("FedAveragg", "./algorithms/FedAveragg.html", "./python_guides/FedAveragg.py", "FedAveragg-code", "FedAveragg-project", "https://colab.research.google.com/drive/1Z4ZhnVsEFGoVv27mD80VjJAt_t-wJ3WJ#scrollTo=LTjQEAKRUlg2");
renderAlgorithm("DifPriTech", "./algorithms/DifPriTech.html", "./python_guides/DifPriTech.py", "DifPriTech-code", "DifPriTech-project", "https://colab.research.google.com/drive/1HfJz9CcGlS8d1TBWzdwe7F8eXBDGyQfi#scrollTo=4JU6ZK5CUoox");
renderAlgorithm("ARIMAModel", "./algorithms/ARIMAModel.html", "./python_guides/ARIMAModel.py", "ARIMAModel-code", "ARIMAModel-project", "https://colab.research.google.com/drive/1dMVmvv1rVgxpjg97Yn1csyxVQT20zHbV#scrollTo=anU5KJnuUr80");
renderAlgorithm("SARIMAModl", "./algorithms/SARIMAModl.html", "./python_guides/SARIMAModl.py", "SARIMAModl-code", "SARIMAModl-project", "https://colab.research.google.com/drive/1_lCIqnbnE8IDPmlFBTcMC_xmMaW5u0tY#scrollTo=xfhQ1zF7UxNl");
renderAlgorithm("ProphetMod", "./algorithms/ProphetMod.html", "./python_guides/ProphetMod.py", "ProphetMod-code", "ProphetMod-project", "https://colab.research.google.com/drive/1eFuaCMq1sQuGomjzfdvT_qHKNEf--3de#scrollTo=Pps2NqQWU3Mi");
renderAlgorithm("LSTMTimeSe", "./algorithms/LSTMTimeSe.html", "./python_guides/LSTMTimeSe.py", "LSTMTimeSe-code", "LSTMTimeSe-project", "https://colab.research.google.com/drive/1pJcyhEVSbwSc0wQbhha_XkrLqqiidXky#scrollTo=1yxgzYDJU6o2");
renderAlgorithm("TempConNet", "./algorithms/TempConNet.html", "./python_guides/TempConNet.py", "TempConNet-code", "TempConNet-project", "https://colab.research.google.com/drive/1oDeRdlLtl19XoK9XlFRg9cYU0-yNhQXA#scrollTo=R6akp4zZVANI");
renderAlgorithm("TranTimSer", "./algorithms/TranTimSer.html", "./python_guides/TranTimSer.py", "TranTimSer-code", "TranTimSer-project", "https://colab.research.google.com/drive/1qhQ52IDqLjdvQllUVvmcZ1TKjegGo2Zx#scrollTo=krDTTSk5VDol");
renderAlgorithm("WordEmbedd", "./algorithms/WordEmbedd.html", "./python_guides/WordEmbedd.py", "WordEmbedd-code", "WordEmbedd-project", "https://colab.research.google.com/drive/1FJm6J7naXSkBL7BTcnQvaXe6rtzo9QGB#scrollTo=bVz4mncuVIB4");
renderAlgorithm("Transfrmrs", "./algorithms/Transfrmrs.html", "./python_guides/Transfrmrs.py", "Transfrmrs-code", "Transfrmrs-project", "https://colab.research.google.com/drive/13dtqaPEqOO9p6URAqwvvLRpudNztlOq6#scrollTo=isp40NiMVLej");
renderAlgorithm("TextClaSen", "./algorithms/TextClaSen.html", "./python_guides/TextClaSen.py", "TextClaSen-code", "TextClaSen-project", "https://colab.research.google.com/drive/19UgHqognad1pF_s5aXppN3VK4ra4QJ3C#scrollTo=8VlRHGMaVOnK");
renderAlgorithm("NamEntRecg", "./algorithms/NamEntRecg.html", "./python_guides/NamEntRecg.py", "NamEntRecg-code", "NamEntRecg-project", "https://colab.research.google.com/drive/1taWjknLj6yypM3HJ3aMgj6LG4XqwMhVR#scrollTo=uPgpE8I6VSNI");
renderAlgorithm("TopiModeln", "./algorithms/TopiModeln.html", "./python_guides/TopiModeln.py", "TopiModeln-code", "TopiModeln-project", "https://colab.research.google.com/drive/1oDZLqQpmhpK0QnvLfylnZEyWOHhOWfTW#scrollTo=WhgUJ4sDVV9B");
renderAlgorithm("Seq2SeqMod", "./algorithms/Seq2SeqMod.html", "./python_guides/Seq2SeqMod.py", "Seq2SeqMod-code", "Seq2SeqMod-project", "https://colab.research.google.com/drive/1PagvlYOZgWfraicjWIRbeUS5aUleGzOe#scrollTo=KrCzZwAxVZmi");
renderAlgorithm("ImagClasif", "./algorithms/ImagClasif.html", "./python_guides/ImagClasif.py", "ImagClasif-code", "ImagClasif-project", "https://colab.research.google.com/drive/16IADvFBh13h8CIwFnZsxlvlFc9MRCvpK#scrollTo=kwWMMbpdVeBe");
renderAlgorithm("ObjDetectn", "./algorithms/ObjDetectn.html", "./python_guides/ObjDetectn.py", "ObjDetectn-code", "ObjDetectn-project", "https://colab.research.google.com/drive/1GA8AymtCPtWBQhSl_-rjqNmnJj_Kuapb#scrollTo=yojSuPAQVjKA");
renderAlgorithm("ImagSegmen", "./algorithms/ImagSegmen.html", "./python_guides/ImagSegmen.py", "ImagSegmen-code", "ImagSegmen-project", "https://colab.research.google.com/drive/11R20fOKAxOIlN--owloZ5_Cwa0O0wju_#scrollTo=K25r8DbqVmyx");
renderAlgorithm("ImagGenrat", "./algorithms/ImagGenrat.html", "./python_guides/ImagGenrat.py", "ImagGenrat-code", "ImagGenrat-project", "https://colab.research.google.com/drive/1wP6fXWDQ3AImEk_mHi1TejG0ny_hl_HP#scrollTo=h3A8Ni2mVqTG");