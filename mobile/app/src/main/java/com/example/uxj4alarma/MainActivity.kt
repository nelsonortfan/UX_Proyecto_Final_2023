package com.example.uxj4alarma

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val boton1=findViewById<Button>(R.id.Ui_addRecordatorio)
        boton1.setOnClickListener {
            val intento1 = Intent(this, CreateActivity::class.java)
            startActivity(intento1)
        }
    }
}