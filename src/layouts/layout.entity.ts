import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Layout {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true }) // Order-ID bleibt optional, falls noch nicht aus dem CRM vorhanden
    orderId: string;

    @Column({ nullable: true })
    customerEmail: string;

    @Column({ nullable: true })
    customerFirstName: string;

    @Column({ nullable: true })
    customerLastName: string;

    @Column({ type: 'text', nullable: false }) // War vorher: { type: 'date' } - Pflichtfeld
    eventDate: string;

    @Column({ nullable: false, default: "Unbekannt"}) // Name1 ist verpflichtend
    name1: string;

    @Column({ nullable: false, default: "Unbekannt"}) // Name2 ist verpflichtend
    name2: string;

    @Column({ nullable: true }) // Name3 ist optional (z. B. für Firmenevents oder Geburtstage)
    name3?: string;

    @Column({ type: 'jsonb', nullable: true })
    layoutData: object;

    @Column({ type: 'jsonb', nullable: true })
    originalLayoutData: object; // Speichert das Original-Layout für Reset-Funktion

    @Column({ type: 'jsonb', nullable: true })
    uploadedImages: object; // Speichert die URLs der hochgeladenen Bilder

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    exportedAt: Date;

    @Column({ nullable: true, unique: true })
    deepLink: string;

    @Column({ default: false })
    isFinal: boolean; // Speichert, ob das Layout endgültig gespeichert wurde

    @IsOptional()
    @Column({ nullable: true })
    selectedLayout?: string;

}
