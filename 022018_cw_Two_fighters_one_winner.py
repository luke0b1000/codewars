def declare_winner(fighter1, fighter2, first_attacker):
    turn = first_attacker
    while fighter1.health > 0 and fighter2.health > 0:
        if turn == fighter1.name:
            fighter2.health -= fighter1.damage_per_attack
            turn = fighter2.name
        elif turn == fighter2.name:
            fighter1.health -= fighter2.damage_per_attack
            turn = fighter1.name
    if fighter1.health <= 0:
        return fighter2.name
    return fighter1.name
