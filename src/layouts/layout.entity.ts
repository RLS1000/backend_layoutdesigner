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

    @Column({ type: 'date', nullable: true })
    eventDate: Date;

    @Column({ type: 'jsonb', nullable: true })
    layoutData: object;

    @Column({ type: 'jsonb', nullable: true })
    originalLayoutData: object; // Speichert das Original-Layout für Reset-Funktion

    @Column({ type: 'jsonb', nullable: true })
    uploadedImages: object; // Speichert die URLs der hochgeladenen Bilder

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    exportedAt: Date;

    @Column({ nullable: true })
    deepLink: string;
}