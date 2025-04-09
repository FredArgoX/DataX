const realSelectX = document.getElementById("purposeSelector");
const customSelectX = document.querySelector(".custom-select");
const optionsContainerX = document.querySelector(".options-container");
const selectedDisplayX = document.querySelector(".selected");
const algorithmElementsX = document.querySelectorAll('.algorithm');









// Handle selection
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
        selectedDisplayX.textContent = option.textContent;
        realSelectX.value = option.getAttribute("data-value");
        //
        console.log(realSelectX.value);
        //
        algorithmElementsX.forEach(el => {
            //const text = el.textContent.toLocaleLowerCase();
            el.classList.remove('highlight');

            if(realSelectX.value === 'regression' && el.classList.contains('regression')){
                el.classList.add('highlight');
                document.querySelector('[value="regression1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'classification' && el.classList.contains('classification')){
                el.classList.add('highlight');
                document.querySelector('[value="classification1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'clustering' && el.classList.contains('clustering')){
                el.classList.add('highlight');
                document.querySelector('[value="clustering1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'dimensionalityReduction' && el.classList.contains('dimensionalityReduction')){
                el.classList.add('highlight');
                document.querySelector('[value="dimensionalityReduction1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'anomalyDetection' && el.classList.contains('anomalyDetection')){
                el.classList.add('highlight');
                document.querySelector('[value="anomalyDetection1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'classification_Clustering' && el.classList.contains('classification_Clustering')){
                el.classList.add('highlight');
                document.querySelector('[value="classification_Clustering1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'policyLearning_DecisionMaking' && el.classList.contains('policyLearning_DecisionMaking')){
                el.classList.add('highlight');
                document.querySelector('[value="policyLearning_DecisionMaking1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'general_FeatureLearning' && el.classList.contains('general_FeatureLearning')){
                el.classList.add('highlight');
                document.querySelector('[value="general_FeatureLearning1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'generation_Reconstruction' && el.classList.contains('generation_Reconstruction')){
                el.classList.add('highlight');
                document.querySelector('[value="generation_Reconstruction1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'graphLearning_Representation' && el.classList.contains('graphLearning_Representation')){
                el.classList.add('highlight');
                document.querySelector('[value="graphLearning_Representation1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'classification_Regression' && el.classList.contains('classification_Regression')){
                el.classList.add('highlight');
                document.querySelector('[value="classification_Regression1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'modelOptimization_Automation' && el.classList.contains('modelOptimization_Automation')){
                el.classList.add('highlight');
                document.querySelector('[value="modelOptimization_Automation1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'distributedLearning_PrivacyPreservingML' && el.classList.contains('distributedLearning_PrivacyPreservingML')){
                el.classList.add('highlight');
                document.querySelector('[value="distributedLearning_PrivacyPreservingML1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'timeSeriesForecasting' && el.classList.contains('timeSeriesForecasting')){
                el.classList.add('highlight');
                document.querySelector('[value="timeSeriesForecasting1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'textUnderstanding_Generation' && el.classList.contains('textUnderstanding_Generation')){
                el.classList.add('highlight');
                document.querySelector('[value="textUnderstanding_Generation1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
            else if(realSelectX.value === 'imageAnalysis_Generation' && el.classList.contains('imageAnalysis_Generation')){
                el.classList.add('highlight');
                document.querySelector('[value="imageAnalysis_Generation1stElement"]').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
            }
        });
    });
});