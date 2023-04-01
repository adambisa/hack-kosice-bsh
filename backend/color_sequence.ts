
export function color_sequence(members: number): Array<[number, number, number, number]> {
    const HEX = 16_777_216;
    const multi = Math.trunc(HEX / members);
    const sequence = new Array;

    for (let i = 0; i < members; i++) {
        let a = multi * i;
        const color = [0, 0, 0, 0]
        for (let j = 0; j < 3; j++) {
                color[j] = a % 256
                a = Math.trunc(a / 256)
            }
            sequence.push(color);
    }

    return sequence;    
}
    
