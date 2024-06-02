interface CatchPhrase {
  phrase: string;
}

class ProactiveDidacticContingency implements CatchPhrase {
  phrase: string;

  constructor() {
    this.phrase = "Proactive didactic contingency";
  }

  displayPhrase(): void {
    console.log(this.phrase);
  }
}

// Usage
const proactiveStrategy = new ProactiveDidacticContingency();
proactiveStrategy.displayPhrase();
