const _skills = {
    0: { "name": "miecze", "gp": 30, "koszt": 100, "long": "walce mieczem" },
    1: { "name": "szable", "gp": 30, "koszt": 100, "long": "walce szabla" },
    2: { "name": "sztylety", "gp": 30, "koszt": 70, "long": "walce sztyletem" },
    3: { "name": "topory", "gp": 30, "koszt": 100, "long": "walce toporem" },
    4: { "name": "maczugi", "gp": 30, "koszt": 100, "long": "walce maczuga" },
    5: { "name": "mloty", "gp": 30, "koszt": 100, "long": "walce mlotem" },
    6: { "name": "bronie drzewcowe", "gp": 30, "koszt": 100, "long": "walce bronia drzewcowa" },
    7: { "name": "wlocznie", "gp": 30, "koszt": 100, "long": "walce wlocznia" },
    9: { "name": "bicze", "gp": 30, "koszt": 40, "long": "walce biczem" },
    10: { "name": "bronie lancuchowe", "gp": 30, "koszt": 100, "long": "walce bronmi lanuchowymi" },
    11: { "name": "luki", "gp": 30, "koszt": 70, "long": "poslugiwaniu sie lukami" },
    12: { "name": "kusze", "gp": 30, "koszt": 70, "long": "poslugiwaniu sie kuszami" },
    20: { "name": "walka dwiema bronmi", "gp": 20, "koszt": 100, "long": "walce dwiema bronmi jednoczesnie" },
    21: { "name": "walka bez broni", "gp": 30, "koszt": 50, "long": "walce bez broni" },
    22: { "name": "walka w ciemnosci", "gp": 20, "koszt": 50, "long": "walce w ciemnosciach" },
    23: { "name": "parowanie", "gp": 20, "koszt": 100, "long": "parowaniu ciosow przeciwnika" },
    24: { "name": "uniki", "gp": 20, "koszt": 100, "long": "unikaniu ciosow przeciwnika" },
    25: { "name": "walka konna", "gp": 30, "koszt": 70, "long": "walce z konskiego grzbietu" },
    26: { "name": "tarczownictwo", "gp": 20, "koszt": 100, "long": "skutecznym uzywaniu tarczy" },
    29: { "name": "ogluszanie", "gp": 20, "koszt": 50, "long": "ogluszaniu przeciwnikow" },
    30: { "name": "zdolnosci przywodcze", "gp": 30, "koszt": 130, "long": "wywieraniu wplywu na innych" },
    31: { "name": "walka w szyku", "gp": 30, "koszt": 80, "long": "walce w szyku" },
    100: { "name": "ocena przeciwnika", "gp": 30, "koszt": 50, "long": "ocenianiu cech i stanow osob" },
    101: { "name": "ocena obiektu", "gp": 30, "koszt": 50, "long": "ocenianiu wlasnosci przedmiotow" },
    102: { "name": "szacowanie", "gp": 30, "koszt": 50, "long": "szacowaniu wartosci przedmiotow" },
    103: { "name": "plywanie", "gp": 50, "koszt": 50, "long": "plywaniu i nurkowaniu" },
    104: { "name": "wspinaczka", "gp": 50, "koszt": 50, "long": "wspinaniu sie" },
    105: { "name": "opieka nad zwierzetami", "gp": 30, "koszt": 50, "long": "opiekowaniu sie zwierzetami i wzbudzaniu ich zaufania" },
    106: { "name": "wyczucie kierunku", "gp": 30, "koszt": 50, "long": "rozpoznawaniu kierunkow i znajdowaniu sciezek" },
    107: { "name": "tropienie", "gp": 30, "koszt": 60, "long": "znajdowaniu i rozpoznawaniu sladow" },
    108: { "name": "lowiectwo", "gp": 100, "koszt": 50, "long": "lowieniu dzikich zwierzat" },
    109: { "name": "spostrzegawczosc", "gp": 50, "koszt": 60, "long": "zauwazaniu tego, co ukryte" },
    110: { "name": "targowanie sie", "gp": 30, "koszt": 100, "long": "zawieraniu korzystnych transakcji handlowych" },
    111: { "name": "jezdziectwo", "gp": 35, "koszt": 55, "long": "jezdzie konnej" },
    112: { "name": "gornictwo", "gp": 100, "koszt": 90, "long": "wydobywaniu mineralow spod ziemi" },
    114: { "name": "metalurgia", "gp": 100, "koszt": 60, "long": "metalurgii" },
    116: { "name": "zestrojenie ze slowami runicznymi", "gp": 100, "koszt": 100, "long": "zestrojeniu ze slowami runicznymi" },
    132: { "name": "znajomosc jezykow", "gp": 40, "koszt": 50, "long": "identyfikacji starozytnych i wspolczesnych jezykow i pism" },
    204: { "name": "skradanie sie", "gp": 30, "koszt": 70, "long": "przemykaniu sie ukradkiem" },
    205: { "name": "ukrywanie sie", "gp": 30, "koszt": 70, "long": "ukrywaniu siebie i przedmiotow" },
    207: { "name": "wyczucie slabosci", "gp": 20, "koszt": 200, "long": "wyczuwaniu slabosci wroga" },
    300: { "name": "magia ognia", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia ognia" },
    301: { "name": "magia powietrza", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia powietrza" },
    302: { "name": "magia ziemi", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia ziemi" },
    303: { "name": "magia wody", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia wody" },
    304: { "name": "magia zycia", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia zycia" },
    305: { "name": "magia mroku", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia mroku" },
    310: { "name": "koncentracja", "gp": 30, "koszt": 100, "long": "koncentrowaniu swoich magicznych zdolnosci" },
    311: { "name": "koncentracja w walce", "gp": 20, "koszt": 100, "long": "koncentrowaniu swoich magicznych zdolnosci podczas walki" },
    312: { "name": "magia runiczna", "gp": 30, "koszt": 70, "long": "pisaniu i uzywaniu run" },
    313: { "name": "czarodziejstwo", "gp": 30, "koszt": 70, "long": "znajomosci i uzywaniu magii" },
    330: { "name": "zielarstwo", "gp": 100, "koszt": 70, "long": "znajdowaniu i rozpoznawaniu ziol" },
    331: { "name": "alchemia", "gp": 100, "koszt": 70, "long": "warzeniu i rozpoznawaniu mikstur" },
    332: { "name": "przemiana", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia przemiany" },
    333: { "name": "iluzja", "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia iluzji" },
    334: { "name": "mistycyzm", "gp": 30, "koszt": 100, "long": "mistycyzmie" },
    335: { "name": "zaklinanie", "gp": 30, "koszt": 100, "long": "zaklinaniu" },
    336: { "name": "przywolywanie", "gp": 30, "koszt": 100, "long": "magii tworzenia i przywolywania" },
    337: { "name": "rozpraszanie", "gp": 30, "koszt": 100, "long": "rozpraszaniu zaklec" },
}
const skills = new Map(Object.entries(_skills));
